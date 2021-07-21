import { once } from 'events';
import { createInterface } from 'readline';
import { loadCachedMiddleware, createComposeMiddleware,  } from '../lib/plugin-compose';


class PipelineWorker {
    constructor(_nodeTree, _buildProfile) {
        this.nodeTree = _nodeTree;
        this.buildProfile = _buildProfile;
        // create compose plugin handler chain
        const cachedMiddleware = loadCachedMiddleware();
        const composedMiddleware = createComposeMiddleware(
            cachedMiddleware, 
            ["acabula-middleware-line-text-formatter",
            // "acabula-middleware-chunkify", 
            // "acabula-middleware-genelizer", 
            "acabula-middleware-syntax-highlight"]);
        this.composedPlugin = composedMiddleware;
    }
    
    async applyPluginPipeline(resource, checkedPlugin) {
        // checkedPlugin shoud be a list of object with user option parameters
        const ordinaryPluginList = checkedPlugin.sort();

        const dataFrame = await (async function(fn) {
            // const df = new dfd.DataFrame([["a", "a", "a", "a", "a"]], { columns: ["DateTime", "Level", "ThreadId", "ProcessName", "Message"] });
            const context = {
                data: null, 
                dataFrame: []
            };
            const statistics = {
                line: 0,
            };
            try {
                const rl = createInterface({
                    input: resource,
                    crlfDelay: Infinity
                });
    
                rl.on('line', (line) => {
                    // apply middleware for every line, and create 
                    context.data = line;
                    statistics.line ++;
                    fn(context);
                    // df.append(context.data);
                });
    
                await once(rl, 'close');
    
                console.log(`line process finished, origin line: ${statistics.line}, record log line: ${context.dataFrame.length}`);
            } catch (err) {
                console.error(err);
            }
            return context.dataFrame;
        })(this.composedPlugin);
        
        // bulk process
        const SEGMENT_DELIMITER = "TMSM main service OnStart";
        const shards = [];
        let section_start_index = 0;
        let section_end_index = null;
        for (let [index, record] of dataFrame.entries()) {
            const message = record[4];
            if (message.search(SEGMENT_DELIMITER) > -1) {
                if (index == 0) {
                    section_start_index = 0;
                    continue;
                }
                section_end_index = index - 1;

                shards.push([section_start_index, section_end_index]);

                section_start_index = index;
            }
        }
        section_end_index = dataFrame.length - 1;
        shards.push([section_start_index, section_end_index]);


        const result = [];
        const useStatistics = (recordList) => {
            // groupby and count
            const levelStat = recordList.reduce((m, e) => {
                m[e[1]] = (m[e[1]]||0) + 1;
                return m;
            }, {});
            // padding data type.
            return Object.assign(
                {
                    ERROR: 0, 
                    INFO: 0, 
                    DEBUG: 0, 
                    WARN: 0,
                }, levelStat);
        };
        // create thread block
        for (let [start, end] of shards) {
            const thread_map = new Map();
            for (let i = start; i <= end; i++) {
                const record_tid = dataFrame[i][2];
                if (! thread_map[record_tid]) {
                    thread_map[record_tid] = [];
                }
                thread_map[record_tid].push(dataFrame[i]);
            }
            const serverStartBlock = {};
            serverStartBlock.segmentName = dataFrame[start][0];
            serverStartBlock.group = [];
            for (let threadId in thread_map) {
                const threadBlock = {};
                threadBlock.blockName = threadId;
                threadBlock.indicators = useStatistics(thread_map[threadId]);
                // other
                threadBlock.scheduler = false;
                threadBlock.timeSpan = {
                    start: thread_map[threadId][0][0],
                    end: thread_map[threadId][ thread_map[threadId].length - 1 ][0],
                };
                threadBlock.previewContent = thread_map[threadId].slice(0, 5).map(record => record[4]);
                serverStartBlock.group.push(threadBlock);
            }
            result.push(serverStartBlock);
            // clear map because the tid will reused in difference server onstart
            thread_map.clear();
        }

        return result;
    }
}

export default PipelineWorker;
