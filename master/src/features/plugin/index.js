import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as TreeUtil from "@/features/node_tree/structure";
import TreeNodeInfo from '@/features/node_tree/TreeNodeInfo';
import * as axios from 'axios';
// thunk action function here
export const addPlugin = createAsyncThunk(
    'plugin/addPlugin',
    // The payload creator receives the partial `{title, content, user}` object
    async uploadData => {
        // We send the initial data to the fake API server
        const response = await axios.post('/api/plugin/upload', { post: uploadData })
        // The response includes the complete post object, including unique ID
        return response.pluginDescriptor
    }
)
export const uploadPlugin = createAsyncThunk(
    'plugin/uploadPlugin',
    // The payload creator receives the partial `{title, content, user}` object
    async uploadData => {
        // We send the initial data to the fake API server
        const response = await axios.post('/api/plugin/upload', { post: uploadData })
        // The response includes the complete post object, including unique ID
        return response.pluginDescriptor
    }
)
export const deletePlugin = createAsyncThunk(
    'plugin/deletePlugin',
    // The payload creator receives the partial `{title, content, user}` object
    async uploadData => {
        // We send the initial data to the fake API server
        const response = await axios.post('/api/plugin/upload', { post: uploadData })
        // The response includes the complete post object, including unique ID
        return response.pluginDescriptor
    }
)


export const PluginSlice = createSlice({
    name: 'plugin',
    initialState: {
        state: 'test',
        pluginList: [
            {
                type: "Text File",
                pluginId: "plugin hash id 1",
                status: 'enabled',
            },
            {
                type: "Text File",
                pluginId: "plugin hash id 2",
                status: 'enabled',
            },
            {
                type: "Text File",
                pluginId: "plugin hash id 3",
                status: 'disabled',
            },
        ],  // END >>> array data
    },
    reducers: {
        // addPlugin: (state, action) => {
        // //     // const newNodeInfo = {
        // //     //     id: TreeUtil.UUIDV4(),
        // //     //     labelText: "Unnamed Node",
        // //     //     labelInfo: "",
        // //     //     color: "rgba(255,255,255, 1)",
        // //     //     bgColor: "transparent",
        // //     //     children: [],
        // //     // };
        // //     // TreeUtil.appendNode(state.treeData, state.currentId, newNodeInfo);
        // // },
        // // removePlugin: (state, action) => {
        // //     // const parentNode = TreeUtil.removeNodeTree(state.treeData, state.currentId);
        // //     // state.currentId = parentNode;
        // // },
        // // updatePluginObject: (state, action) => {
        // //     // TreeUtil.updateNodeDataObject(state.treeData, state.currentId, action.payload);
        // },
    },


    extraReducers: {
        [addPlugin.pending]: (state, action) => {
            // We can directly add the new resource object to our array
            // TreeUtil.updateNodeDataObject(state.treeData, state.currentId, action.payload);
        },
        [addPlugin.fulfilled]: (state, action) => {
            // We can directly add the new resource object to our array
            // TreeUtil.updateNodeDataObject(state.treeData, state.currentId, action.payload);
        },
        [addPlugin.rejected]: (state, action) => {
            // We can directly add the new resource object to our array
            // TreeUtil.updateNodeDataObject(state.treeData, state.currentId, action.payload);
        },
        // omit loading reducers
        [uploadPlugin.pending]: (state, action) => {
            // We can directly add the new resource object to our array
            // TreeUtil.updateNodeDataObject(state.treeData, state.currentId, action.payload);
        },
        [uploadPlugin.fulfilled]: (state, action) => {
            // We can directly add the new resource object to our array
            // TreeUtil.updateNodeDataObject(state.treeData, state.currentId, action.payload);
        },
        [uploadPlugin.rejected]: (state, action) => {
            // We can directly add the new resource object to our array
            // TreeUtil.updateNodeDataObject(state.treeData, state.currentId, action.payload);
        },
        // omit loading reducers
        [deletePlugin.pending]: (state, action) => {
            // We can directly add the new resource object to our array
            // TreeUtil.updateNodeDataObject(state.treeData, state.currentId, action.payload);
        },
        [deletePlugin.fulfilled]: (state, action) => {
            // We can directly add the new resource object to our array
            // TreeUtil.updateNodeDataObject(state.treeData, state.currentId, action.payload);
        },
        [deletePlugin.rejected]: (state, action) => {
            // We can directly add the new resource object to our array
            // TreeUtil.updateNodeDataObject(state.treeData, state.currentId, action.payload);
        },
    }
});


// export const {addPlugin, removePlugin, updatePluginObject, } = PluginSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectPluginList = state => state.plugin.pluginList;



export default PluginSlice.reducer;
