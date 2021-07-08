const { readFile, createReadStream } = require('fs');
var Promise = require('es6-promise').Promise;

class ResourceManager {
    constructor(_nodeTree, _buildProfile) {
        this.nodeTree = _nodeTree;
        this.buildProfile = _buildProfile;
    }
    async getResource(resourceName) {
        // use sync read
        const fileContent = await new Promise(
        function(resolve, reject) {
            readFile(`./upload/${resourceName}`, 'utf8', (result)=>{
                resolve(result);
            })
        });
        return fileContent;
    }
    async getReadStream(resourceName) {
        const fileName = `./upload/${resourceName}`;
        const fileStream = createReadStream(fileName);
        return fileStream;
    }
}

export default ResourceManager;