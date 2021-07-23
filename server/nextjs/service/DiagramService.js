// flatten tree structure, and global merge sort all block, assigin to time line block
// we need to keep the right hierarchy on block which belong to the column(track) and segment
const convertTreeToMap2D = (root) => {
    // let depth = 0;
    let queue = [root];
    const trackList = [];
    while (queue.length > 0) {
        const { id, labelText, subGroup, fragments } = queue.shift();
        // this is a group node
        if (subGroup) {
            queue = queue.concat(subGroup);
        } else if (fragments) {
            let blockList = [];
            for (let seg of fragments) {
                const segName = seg.segmentName;
                for (let blk of seg.group) {
                    const blockInfo = Object.assign(
                        {},
                        blk,
                        { segName, },
                    );
                    blockList.push(blockInfo);
                }
            }
            const sortedBlockList = blockList.sort((a, b) => {
                if (a.timeSpan.start == b.timeSpan.start) {
                    if (a.timeSpan.end == b.timeSpan.end) return 0;
                    return (a.timeSpan.end > b.timeSpan.end) ? 1 : -1;
                };
                return (a.timeSpan.start > b.timeSpan.start) ? 1 : -1;
            });
            trackList.push({ id, labelText, dataList: sortedBlockList });
        } else {
            throw Error(`invalid node, id: ${id}`);
        }
    }

    // group block into 2d array by time span
    const computedMap = trackList.map(track => Object.assign(track, { cursor: 0, cellMap: [[]] }))
    const hasData = (t) => t.cursor < t.dataList.length;
    // sort by start time in column order list
    let minStartTime = "9999-99-99 99:99:99.9999";
    let selectTrackWhichHasMinStartItemSet = [];
    let maxBottomTime = -1;
    let maxEndInd = -1;
    const createNewRow = (cm) => {
        for (let [i, t] of cm.entries()) {
            t.cellMap.push([]);
        }
    };
    while (computedMap.some(hasData)) {
        // find the min start time of element from cursor list
        selectTrackWhichHasMinStartItemSet = [];
        let localMinStartTime = "9999-99-99 99:99:99.9999";
        for (let [i, t] of computedMap.entries()) {
            if (t.cursor >= t.dataList.length) continue;
            const { start: curStartTime, end: curEndTime } = t.dataList[t.cursor].timeSpan;
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

        let hasSealRow = false;
        let hasFlushedAll = false;
        for (let selectTrackWhichHasMinStartItem of selectTrackWhichHasMinStartItemSet) {
            // console.log(selectTrackWhichHasMinStartItem);
            const selectedTrack = computedMap[selectTrackWhichHasMinStartItem];

            const selectedLayerInTrack = selectedTrack.dataList[selectedTrack.cursor];
            const { curStartTime, curEndTime } = selectedLayerInTrack.timeSpan;
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

            selectedTrack.cursor++;

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
    }
    const selectField = (t) => {
        const { id, labelText, cellMap } = t;
        return { id, labelText, cellMap };
    };
    return computedMap.map(selectField);
}

export default {
    submit: (documentTree) => {
        return convertTreeToMap2D(documentTree);
    } 
}