const { once } = require('events');
const { createInterface } = require('readline');

class PipelineWorker {
    constructor(_nodeTree, _buildProfile) {
        this.nodeTree = _nodeTree;
        this.buildProfile = _buildProfile;
    }
    async applyPluginPipeline(resource, checkedPlugin) {
        // checkedPlugin shoud be a list of object with user option parameters
        
        const ordinaryPluginList = checkedPlugin.sort();
        // make compose plugin chain
        const composedPlugin = (v) => {return v.slice(0, 100)};
        const result = [];
        await (async function(fn) {
            try {
                const rl = createInterface({
                    input: resource,
                    crlfDelay: Infinity
                });
    
                rl.on('line', (line) => {
                    const tmp = composedPlugin(line);
                    result.push(tmp);
                });
    
                await once(rl, 'close');
    
                console.log('finished');
            } catch (err) {
                console.error(err);
            }
        })(composedPlugin);
        return result;
    }
}

export default PipelineWorker;
