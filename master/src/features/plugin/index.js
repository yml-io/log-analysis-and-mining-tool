import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as axios from 'axios';
import { addDocument } from '@/features/document_set';
import { DocumentInfo } from "@/features/document_set/document_type";


export const getPluginList = createAsyncThunk(
    'plugin/getPluginList',
    async (args, thunkAPI) => {
        // can not useSelector here, it only can be in function component
        const response = await axios({
            url: 'http://localhost:3000/api/plugin/list',
            method: 'get',
        });

        thunkAPI.dispatch(clearAllPlugin());
        response.data.data.plugins.map(p => {
            const newPlugin = {
                type: p.type,
                id: p.id,
                name: p.name,
                version: p.info.version,
                description: p.info.description,
                author: p.info.author.name,
                enabled: true,
            };
            thunkAPI.dispatch(addPlugin(newPlugin));
        });
    }
)

export const getPluginProductPage = createAsyncThunk(
    'plugin/getPluginProductPage',
    async (args, thunkAPI) => {
        // can not useSelector here, it only can be in function component
        const postParams = {
            id: args,
        };
        const response = await axios({
            url: 'http://localhost:3000/api/plugin/getProductPage',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            data: postParams,
        });

        // create a new tab
        createNewTab(thunkAPI, response.data);

        return response.data;
    }
)

const createNewTab = (thunkAPI, responseData) => {
    const tabTitle = `${new Date().toISOString().replace(/[T]/g, ' ').replace(/\.(\d\d).+/, '$1')}`;
    thunkAPI.dispatch(addDocument(DocumentInfo(tabTitle, responseData.data.htmlContent, responseData.data.type)));
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
        ],  // END >>> array data
    },
    reducers: {
        addPlugin: (state, action) => {
            state.pluginList.push(action.payload);
        },
        removePlugin: (state, action) => {

        },
        updatePluginObject: (state, action) => {

        },
        clearAllPlugin: (state, action) => {
            state.pluginList = [];
        },
    },
});

export const { addPlugin, removePlugin, updatePluginObject, clearAllPlugin } = PluginSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectPluginList = state => state.plugin.pluginList;

export default PluginSlice.reducer;