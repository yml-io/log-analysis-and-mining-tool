import PipelineWorker from './PipelineWorker';
import ResourceManager from './ResourceManager';
import DiagramService from './DiagramService';
import IndexService from './IndexService';

class TaskRunner {
    constructor(_nodeTree, _keywords, _buildProfile) {
        this.nodeTree = _nodeTree;
        this.keywords = _keywords;
        this.buildProfile = _buildProfile;
        this.pipelineWorker = new PipelineWorker(_nodeTree, _buildProfile);
        this.resourceManager = new ResourceManager(_nodeTree, _buildProfile);
    }

    async createResourceFlow(nodeInfo) {
        const { id, labelText, resourceName, nodeType, nodeDetailType, checkedPlugin, children } = nodeInfo;
        // check if this is a mix node
        if (children && children.length > 0) {
            // concat every node info
            const subGroup = [];
            for (let subNode of children) {
                subGroup.push(await this.createResourceFlow(subNode));
            }
            return { id, labelText, subGroup };
        }
        // this is a data node
        let result = {};
        if (resourceName) {
            // read resource
            const resource = await this.resourceManager.getReadStream(resourceName);

            // apply plugin according to user selected
            const applyedPluginResource = await this.pipelineWorker.applyPluginPipeline(resource, checkedPlugin);

            result = { fragments: applyedPluginResource, id, labelText };
        } else {
            result = { id, labelText };
        }
        return result;
    }

    async run() {
        const documentTree = await this.createResourceFlow(this.nodeTree);
        const diagram = DiagramService.submit(documentTree);
        // indexing the resource using keyword setting
        const indexingResult = IndexService.submit(this.nodeTree, this.keywords);
        return { diagram, indexingResult };
    }
}

export default TaskRunner;