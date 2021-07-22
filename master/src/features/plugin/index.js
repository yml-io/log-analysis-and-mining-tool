import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as TreeUtil from "@/features/node_tree/structure";
import TreeNodeInfo from '@/features/node_tree/TreeNodeInfo';


export const PluginSlice = createSlice({
    name: 'plugin',
    initialState: {
        pluginList: [
            {
                type: "Text File",
                id: "plugin hash id 1",
                name: "Time Convertor",
                version: "0.0.1",
                description: "Convert timeStamp back",
                author: "YM Lab",
                enabled: true,
            },
            {
                type: "Text File",
                id: "plugin hash id 2",
                name: "Time Convertor",
                version: "0.0.1",
                description: "Convert timeStamp back",
                author: "YM Lab",
                enabled: true,
            },
            {
                type: "Text File",
                id: "plugin hash id 3",
                name: "Time Convertor",
                version: "0.0.1",
                description: "Convert timeStamp back",
                author: "YM Lab",
                enabled: false,
            },
        ],  // END >>> array data
    },
    reducers: {
        addPlugin: (state, action) => {

        },
        removePlugin: (state, action) => {

        },
        updatePluginObject: (state, action) => {

        },
    },
});

export const { addPlugin, removePlugin, updatePluginObject, } = PluginSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectPluginList = state => state.plugin.pluginList;

export default PluginSlice.reducer;