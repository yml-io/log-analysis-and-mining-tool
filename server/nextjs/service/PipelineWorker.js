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
            ["acabula-middleware-chunkify", 
            "acabula-middleware-genelizer", 
            "acabula-middleware-syntax-highlight"]);
        this.composedPlugin = composedMiddleware;
    }
    
    async applyPluginPipeline(resource, checkedPlugin) {
        // checkedPlugin shoud be a list of object with user option parameters
        
        const ordinaryPluginList = checkedPlugin.sort();
        // make compose plugin chain
        // const composedPlugin = (v) => {return v.slice(0, 100)};
        const result = [];
        await (async function(fn) {
            try {
                const rl = createInterface({
                    input: resource,
                    crlfDelay: Infinity
                });
    
                rl.on('line', (line) => {
                    const context = {data: line};
                    fn(context);
                    result.push(context.data);
                });
    
                await once(rl, 'close');
    
                console.log('finished');
            } catch (err) {
                console.error(err);
            }
        })(this.composedPlugin);
        return result;
    }
}

export default PipelineWorker;
