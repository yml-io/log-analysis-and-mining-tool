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
            const compareGroup = [];
            for (let subNode of children) {
                compareGroup.push(await this.createResourceFlow(subNode));
            }
            // const mergedResourceFlow = await this.flowMixer.mergedMultiFlow(compareGroup);
            return {id, labelText, compareGroup};
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

    async run() {
        const result = await this.createResourceFlow(this.nodeTree);
        return result;
    }
}

export default TaskRunner;