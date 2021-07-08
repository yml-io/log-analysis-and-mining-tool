var Promise = require('es6-promise').Promise;

class FlowMixer {
    constructor(_nodeTree, _buildProfile) {
        this.nodeTree = _nodeTree;
        this.buildProfile = _buildProfile;
    }
    async mergedMultiFlow(flowList) {
        const flowValueList = await Promise.all(flowList);
        // assume text line format
        const concatedFile = flowValueList.reduce((a, c) => a.concat(c), "");
        return concatedFile;
    }
}

export default FlowMixer;