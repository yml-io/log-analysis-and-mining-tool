import FlowMixer from './FlowMixer';
import PipelineWorker from './PipelineWorker';
import ResourceManager from './ResourceManager';

class TaskRunner {
    constructor(_nodeTree, _buildProfile) {
        this.nodeTree = _nodeTree;
        this.buildProfile = _buildProfile;
        this.flowMixer = new FlowMixer(_nodeTree, _buildProfile);
        this.pipelineWorker = new PipelineWorker(_nodeTree, _buildProfile);
        this.resourceManager = new ResourceManager(_nodeTree, _buildProfile);
    }
    
    async createResourceFlow(nodeInfo) {
        const {id, labelText, resourceName, nodeType, nodeDetailType, checkedPlugin, children} = nodeInfo;
        // check if this is a mix node
        if (children && children.length > 0) {
            // concat every node info
            const subGroup = [];
            for (let subNode of children) {
                subGroup.push(await this.createResourceFlow(subNode));
            }
            // const mergedResourceFlow = await this.flowMixer.mergedMultiFlow(subGroup);
            return {id, labelText, subGroup};
        }
        // this is a data node
        let result = {};
        if (resourceName) {
            // read resource
            const resource = await this.resourceManager.getReadStream(resourceName);
            
            // apply plugin according to user selected
            const applyedPluginResource = await this.pipelineWorker.applyPluginPipeline(resource, checkedPlugin);

            result = {fragments: applyedPluginResource, id, labelText};
        } else {
            result = {id, labelText};
        }
        return result;
    }

    // flatten tree structure, and global merge sort all block, assigin to time line block
    // we need to keep the right hierarchy on block which belong to the column(track) and segment
    convertTreeToMap2D(root) {
        // let depth = 0;
        let queue = [root];
        const trackList = [];
        while (queue.length > 0) {
            const {id, labelText, subGroup, fragments} = queue.shift();
            // this is a group node
            if (subGroup) {
                queue = queue.concat(subGroup);
            } else if (fragments) {
                // const flatMapProp = (m) => (p) => {
                //     // return m.map(e => Object.assign(Array.isArray(e.group)? flatMapProp(e.group)(p): e, p));
                //     const m1 = m.map(e => {Object.assign(e, p)});
                //     const m2 = m1.map(e => {e.group.map(e2 => {Object.assign(e2, )})})
                // };

                // this.mergeInsert(blockList, flatMapProp(fragments)({id, labelText}))
                let blockList = [];
                for (let seg of fragments) {
                    const segName = seg.segmentName;
                    for (let blk of seg.group) {
                        const blockInfo = Object.assign(
                            {},
                            blk,
                            { segName,},
                        );
                        blockList.push(blockInfo);
                    }
                }
                const sortedBlockList = blockList.sort((a, b) => {
                        if (a.timeSpan.start == b.timeSpan.start) {
                            if (a.timeSpan.end == b.timeSpan.end) return 0;
                            return (a.timeSpan.end > b.timeSpan.end)? 1: -1;
                        };
                        return (a.timeSpan.start > b.timeSpan.start)? 1: -1;
                    });
                trackList.push({ id, labelText, dataList: sortedBlockList});
            } else {
                throw Error(`invalid node, id: ${id}`);
            }
        }

        // group block into 2d array by time span
        const computedMap = trackList.map(track => Object.assign(track, { cursor: 0, cellMap: [[]] }))
        const hasData = (t) => t.cursor < t.dataList.length;
        // sort by start time in column order list
        let minStartTime = "9999-99-99 99:99:99.9999";
        // let selectTrackWhichHasMinStartItem = [];
        let selectTrackWhichHasMinStartItemSet = [];
        let maxBottomTime = -1;
        let maxEndInd = -1;
        const createNewRow = (cm) => {
            for (let [i, t] of cm.entries()) {
                t.cellMap.push([]);
            }
        };
        let c = 0;
        // console.log(trackList[0].dataList[computedMap[0].dataList.length - 4]);
        while (computedMap.some(hasData)) {
            // console.log("=======================");
            // find the min start time of element from cursor list
            selectTrackWhichHasMinStartItemSet = [];
            let localMinStartTime = "9999-99-99 99:99:99.9999";
            for (let [i, t] of computedMap.entries()) {
                if (t.cursor >= t.dataList.length) continue;
                const {start: curStartTime, end: curEndTime} = t.dataList[t.cursor].timeSpan;
                // console.log(curStartTime, minStartTime);
                if (curStartTime < localMinStartTime) {
                    localMinStartTime = curStartTime;
                    selectTrackWhichHasMinStartItemSet = [i];
                }
                 else if (curStartTime == localMinStartTime) {
                    selectTrackWhichHasMinStartItemSet.push(i);
                }
            }
            if (minStartTime > localMinStartTime) {
                minStartTime = localMinStartTime;
            }
            
            // console.log(selectTrackWhichHasMinStartItemSet, minStartTime, maxBottomTime);
            // c++;
            // if (c > 10) return;
            // find other same value for selectTrackWhichHasMinStartItemSet

            console.log(selectTrackWhichHasMinStartItemSet);
            let hasSealRow = false;
            let hasFlushedAll = false;
            for (let selectTrackWhichHasMinStartItem of selectTrackWhichHasMinStartItemSet) {
                // console.log(selectTrackWhichHasMinStartItem);
                const selectedTrack = computedMap[selectTrackWhichHasMinStartItem];
                                            
                const selectedLayerInTrack = selectedTrack.dataList[selectedTrack.cursor];
                const {curStartTime, curEndTime} = selectedLayerInTrack.timeSpan;
                // check if seal row, the further layer should be added in the new row
                if (!hasSealRow && 
                    (curStartTime > maxBottomTime || 
                    (selectedTrack.cursor > 0 && 
                        selectedLayerInTrack.segName != selectedTrack.dataList[selectedTrack.cursor - 1].segName))) {
                    createNewRow(computedMap);
                    hasSealRow = true;
                    minStartTime = curStartTime;
                }

                selectedTrack.cellMap[selectedTrack.cellMap.length - 1].push(selectedTrack.dataList[selectedTrack.cursor]);
                // expand bound bottom box 
                if (curEndTime > maxBottomTime) {
                    maxBottomTime = curEndTime;
                }

                selectedTrack.cursor ++;

                if (selectedTrack.cursor == selectedTrack.dataList.length) {
                    // reset min start time
                    hasFlushedAll = true;
                    console.log(`track ${selectedTrack.labelText} flushed`);
                }
            }
            if (hasFlushedAll) {
                createNewRow(computedMap);
                minStartTime = "9999-99-99 99:99:99.9999";
            }
            // for(let t of computedMap) {
            //     console.log(t.cursor, t.cellMap);
            // }
            
        }
        // unionTimeSection(blockList);
        const selectField = (t) => {
            const {id, labelText, cellMap} = t;
            return {id, labelText, cellMap};
        };
        return computedMap.map(selectField);
    }

    
    // BS insert, and group in time section
    // mergeInsert(activeList, element) {
    //     const {start, end} = element;
    //     if (activeList.length == 0) {
    //         activeList.push({
    //             start,
    //             end,
    //             data: [
    //                 element
    //             ]
    //         });
    //         return;
    //     } else {
    //         const latestWindow = activeList[activeList.length - 1];
            
    //     }
         
    // }

    async run() {
        const documentTree = await this.createResourceFlow(this.nodeTree);
        // transform to timeline view
        const diagram = this.convertTreeToMap2D(documentTree);
        return diagram;
    }
}

export default TaskRunner;