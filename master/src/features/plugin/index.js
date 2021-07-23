import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as TreeUtil from "@/features/node_tree/structure";
import TreeNodeInfo from '@/features/node_tree/TreeNodeInfo';
import * as axios from 'axios';

export const getPluginList = createAsyncThunk(
    'plugin/getPluginList',
    async (args, thunkAPI) => {
        // can not useSelector here, it only can be in function component
        const response = await axios({
            url: 'http://localhost:3000/api/plugin/list',
            method: 'get',
        });

        response.data.map(p => {
            addPlugin(p)
        });
    }
)

export const getPluginProductPage= createAsyncThunk(
    'plugin/getPluginProductPage',
    async (args, thunkAPI) => {
        // can not useSelector here, it only can be in function component
        const postParams = {
            extensionId: args.id,
        };
        const response = await axios({
            url: 'http://localhost:3000/api/plugin/getProductPage',
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            data: postParams,
        });
        
        // create a new tab
        createNewTab(thunkAPI, response.data);
                
        return response.data;
    }
)

const createNewTab = (thunkAPI, responseData) => {
    const tabTitle = `${new Date().toISOString().replace(/[T]/g, ' ').replace(/\.(\d\d).+/, '$1')}`;
    thunkAPI.dispatch(addDocument(DocumentInfo(tabTitle, responseData.data.diagram)));
}

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