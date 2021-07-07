import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from 'react-redux';
import { selectTreeData, selectCurrentNode, } from "@/features/node_tree";
import { selectDocumentList, selectActivedDocInd, } from "@/features/document_set";
import { BuildProfileInfo } from "./build_profile_info";
import { DocumentInfo } from "@/features/document_set/document_type";
// import store from '@/app/store'; // 不能添加这句
import * as axios from 'axios';
import { selectCurrentId } from "../node_tree";
import {addDocument} from '@/features/document_set';  // 不能添加这句


export const buildSelectedTask = createAsyncThunk(
    'buildProfile/buildSelectedTask',
    // The payload creator receives the partial `{title, content, user}` object
    async (args, thunkAPI) => {
        // can not useSelector here
        // const nodeTree = useSelector(selectCurrentNode);
        const nodeTree = selectCurrentNode(thunkAPI.getState());

        const taskParams = {
            nodeTree: nodeTree,
            taskProfile: {}
        };
        const response = await axios({
            url: 'http://localhost:3000/api/task/submit',
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            data: taskParams,
        });

        // create a new tab
        createNewTab(thunkAPI, response.data);

        return response.data;
    }
)

export const buildAllTask = createAsyncThunk(
    'buildProfile/buildAllTask',
    // The payload creator receives the partial `{title, content, user}` object
    async (args, thunkAPI) => {
        const nodeTree = selectTreeData(thunkAPI.getState());

        const taskParams = {
            nodeTree,
            taskProfile: {}
        };

        const response = await axios({
            url: 'http://localhost:3000/api/task/submit',
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            data: JSON.stringify(taskParams),
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

export const BuildProfileSlice = createSlice({
    name: "buildProfile",
    initialState: {
        diagram: {},
    },
    reducers: {
        createProfile: (state, action) => {

        },
    },
    extraReducers: {
        [buildAllTask.pending]: (state, action) => {
            // We can directly add the new resource object to our array
        },
        [buildAllTask.fulfilled]: (state, action) => {
            // state.diagram = action.payload.data.diagram;
        },
        [buildAllTask.rejected]: (state, action) => {
            // We can directly add the new resource object to our array
        },

        [buildSelectedTask.pending]: (state, action) => {
            // We can directly add the new resource object to our array
        },
        [buildSelectedTask.fulfilled]: (state, action) => {
            // We can directly add the new resource object to our array
            // state.diagram = action.payload.data.diagram;
        },
        [buildSelectedTask.rejected]: (state, action) => {
            // We can directly add the new resource object to our array
        }
    },
});


export const {createProfile} = BuildProfileSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export default BuildProfileSlice.reducer;



// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };


