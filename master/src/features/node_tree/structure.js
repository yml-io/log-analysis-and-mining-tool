import TreeNodeInfo from '@/features/node_tree/TreeNodeInfo';

class JSTree {
    constructor() {

    }
    findNodeById(currentRoot, value) {
        if (Object.is(currentRoot.id, value)) {
            return currentRoot;
        }
        if (currentRoot.children) {
            // can not use forEach because the forEach is async
            for(let nodeItem of currentRoot.children) {
                const foundResult = this.findNodeById(nodeItem, value)
                if (foundResult) {
                    return (foundResult.parent) ? foundResult : {parent: currentRoot, node: foundResult};
                }
            };
        }
        return null;
    }
}

function UUIDV4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

function findNodeById(currentRoot, targetId) {
    if (Object.is(currentRoot.id, targetId)) {
        return currentRoot;
    }
    if (currentRoot.children) {
        // can not use forEach because the forEach is async
        for(let nodeItem of currentRoot.children) {
            const foundNode = findNodeById(nodeItem, targetId)
            if (foundNode) {
                return (foundNode.parent) ? foundNode : {parent: currentRoot, node: foundNode};
            }
        };
    }
    return null;
}

function appendNode(root, targetId, data) {
    let foundInfo = findNodeById(root, targetId);
    if (foundInfo) {
        if (foundInfo.node) {foundInfo = foundInfo.node;}
        return Array.isArray(foundInfo.children) ? foundInfo.children.push(data) : (foundInfo.children=[]).push(data);
    }
    throw Error(`append: can not find node by id: ${targetId}`);
}

function removeNodeTree(root, targetId, isForce) {
    if (Object.is(root.id, targetId)){
        throw Error(`can not remove root node`);
    }
    let foundInfo = findNodeById(root, targetId);
    console.log(foundInfo)
    if (foundInfo) {
        foundInfo.parent.children = foundInfo.parent.children.filter((nodeItem) => !Object.is(nodeItem.id, targetId));
        // return Array.isArray(foundNode.children) ? foundNode.children.push(data) : (foundNode.children=[]).push(data);
        return foundInfo.parent;
    }
    throw Error(`delete: can not find node by id: ${targetId}`);
}

// function updateNodeData(root, targetId, fieldName, fieldValue) {
//     if (Object.is(root.id, targetId)){
//         throw Error(`can not change root node`);
//     }
//     let foundInfo = findNodeById(root, targetId);
//     if (foundInfo) {
//         foundInfo.node[fieldName] = fieldValue;
//         return;
//     }
//     throw Error(`update: can not find node by id: ${targetId}`);
// }

function updateNodeDataObject(root, targetId, updateObject) {
    if (typeof updateObject != 'object' && Array.isArray(updateObject)) {
        throw Error(`update node data need object, but was : ${JSON.stringify(updateObject)}`);
    }
    if (Object.is(root.id, targetId)){
        throw Error(`can not change root node`);
    }
    
    let foundInfo = findNodeById(root, targetId);
    if (foundInfo) {
        Object.assign(foundInfo.node, updateObject);
        return;
    }
    throw Error(`update: can not find node by id: ${targetId}`);
}

export {
    findNodeById,
    appendNode,
    removeNodeTree,
    UUIDV4,
    updateNodeDataObject,
};