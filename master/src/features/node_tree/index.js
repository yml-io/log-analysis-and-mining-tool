import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MailIcon from "@material-ui/icons/Mail";
import DeleteIcon from "@material-ui/icons/Delete";
import Label from "@material-ui/icons/Label";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import InfoIcon from "@material-ui/icons/Info";
import ForumIcon from "@material-ui/icons/Forum";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import * as TreeUtil from "@/features/node_tree/structure";
import TreeNodeInfo from '@/features/node_tree/TreeNodeInfo';
import * as axios from 'axios';
// thunk action function here
export const uploadNodeResource = createAsyncThunk(
    'nodeTree/uploadNodeResource',
    // The payload creator receives the partial `{title, content, user}` object
    async uploadData => {
        // We send the initial data to the fake API server
        const response = await axios({
            url: 'http://localhost:3000/api/resource/upload',
            method: 'post',
            headers: {'Content-Type': 'multipart/form-data;charset=UTF-8'},
            data: uploadData,
        });
        // The response includes the complete post object, including unique ID
        return response.data;
    }
)


export const NodeTreeSlice = createSlice({
    name: 'nodeTree',
    initialState: {
        contextMenu: {
            show: false,
            mouseX: null,
            mouseY: null,
        },
        showPropertiesDilog: false,
        currentId: 'root',
        treeData: {
            id: 'root',
            labelText: 'Parent',
            // labelIcon: () => InfoIcon,
            labelInfo: '123,133',
            color: 'green',
            bgColor: 'transparent',
            checkedPlugin: [],
            children: [
                {
                    id: '1',
                    labelText: 'Child - 1',
                    // labelIcon: () => InfoIcon,
                    labelInfo: '123,133',
                    color: 'rgba(0,255,255, 1)',
                    bgColor: 'transparent',
                    checkedPlugin: [],
                    resourceName :"2021071707443170debug.tmp",
                    nodeType:"Text File",
                    nodeDetailType:"Time Series",
                },
                {
                    id: '2',
                    labelText: 'Child - 2',
                    // labelIcon: () => InfoIcon,
                    labelInfo: '123,133',
                    color: 'rgba(255,255,255, 1)',
                    bgColor: 'transparent',
                    resourceName :"2021071705150170debug.tmp",
                    nodeType:"Text File",
                    nodeDetailType:"Time Series",
                    checkedPlugin: [],
                },
                {
                    id: '3',
                    labelText: 'Child - 3',
                    // labelIcon: () => InfoIcon,
                    labelInfo: '123,133',
                    color: 'rgba(255,255,255, 1)',
                    bgColor: 'transparent',
                    checkedPlugin: [],
                    children: [
                        {
                            id: '4',
                            labelText: 'Child - 4',
                            // labelIcon: () => InfoIcon,
                            labelInfo: '123,133',
                            color: 'rgba(255,255,255, 1)',
                            bgColor: 'transparent',
                            checkedPlugin: [],
                            children: [
                                {
                                    id: '5',
                                    labelText: 'Child - 5',
                                    // labelIcon: () => InfoIcon,
                                    labelInfo: '123,13',
                                    color: 'rgba(255,255,255, 1)',
                                    bgColor: 'transparent',
                                    checkedPlugin: [],
                                    children: [
                                      {
                                          id: '6',
                                          labelText: 'Child - 6',
                                        //   labelIcon: () => InfoIcon,
                                          labelInfo: '123,133',
                                          color: 'rgba(255,255,255, 1)',
                                          bgColor: 'transparent',
                                          checkedPlugin: [],
                                          children: [
                                            {
                                                id: '7',
                                                labelText: 'Child - 7',
                                                // labelIcon: () => InfoIcon,
                                                labelInfo: '123,133',
                                                color: 'rgba(255,255,255, 1)',
                                                bgColor: 'transparent',
                                                resourceName :"2021072203362030debug.tmp",
                                                nodeType:"Text File",
                                                nodeDetailType:"Time Series",
                                                checkedPlugin: [],
                                            },
                                        ],
                                      },
                                  ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },  // END >>> tree data
    },
    reducers: {
        setNodeTreeContextMenu: (state, action) => {
            state.contextMenu = action.payload;
        },
        setShowPropertiesDilog: (state, action) => {
            if (typeof action.payload === 'boolean') {
                state.showPropertiesDilog = action.payload;
            }
        },
        switchSelectNodeById: (state, action) => {
            if (action.payload) {
                state.currentId = action.payload;
            }
        },
        appendNode: (state, action) => {
            const newNodeInfo = {
                id: TreeUtil.UUIDV4(),
                labelText: "Unnamed Node",
                labelInfo: "",
                color: "rgba(255,255,255, 1)",
                bgColor: "transparent",
                children: [],
            };
            TreeUtil.appendNode(state.treeData, state.currentId, newNodeInfo);
        },
        removeNodeTree: (state, action) => {
            const parentNode = TreeUtil.removeNodeTree(state.treeData, state.currentId);
            state.currentId = parentNode;
        },
        updateNodeDataObject: (state, action) => {
            TreeUtil.updateNodeDataObject(state.treeData, state.currentId, action.payload);
        },
    },


    extraReducers: {
        // omit loading reducers
        [uploadNodeResource.pending]: (state, action) => {
            // We can directly add the new resource object to our array
        },
        [uploadNodeResource.fulfilled]: (state, action) => {
            // We can directly add the new resource object to our array
            TreeUtil.updateNodeDataObject(state.treeData, state.currentId, action.payload.data);
        },
        [uploadNodeResource.rejected]: (state, action) => {
            // We can directly add the new resource object to our array
        }
    }
});


export const {
    switchSelectNodeById, 
    appendNode, 
    removeNodeTree, 
    updateNodeDataObject, 
    setNodeTreeContextMenu, 
    setShowPropertiesDilog,
} = NodeTreeSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTreeData = state => state.nodeTree.treeData;
export const selectContextMenu = state => state.nodeTree.contextMenu;
export const selectShowPropertiesDilog = state => state.nodeTree.showPropertiesDilog;
export const selectCurrentId = state => state.nodeTree.currentId;
export const selectCurrentNode = state => {
    let foundResult = TreeUtil.findNodeById(selectTreeData(state), selectCurrentId(state));
    if (foundResult && foundResult.node) {foundResult = foundResult.node;}
    return foundResult;
}


export default NodeTreeSlice.reducer;
