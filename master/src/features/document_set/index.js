import { createSlice } from "@reduxjs/toolkit";
import {DocumentInfo} from "./document_type";

export const documentSetSlice = createSlice({
    name: "documentSet",
    initialState: {
        documentList: [],
        activedDocInd: 0,
    },
    reducers: {
        addBlankDocument: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.documentList.push(DocumentInfo());
            state.activedDocInd = state.documentList.length - 1;
        },
        addDocument: (state, action) => {
            state.documentList.push(DocumentInfo(action.payload.title, action.payload.content));
            state.activedDocInd = state.documentList.length - 1;
        },
        changeActivedInd: (state, action) => {
            // check this value here?
            state.activedDocInd = action.payload;
        },
        removeDocument: (state, action) => {
            // check this vslue here? 
            state.documentList.splice(action.payload, 1);
        },
    }
});


export const {addBlankDocument, addDocument, removeDocument, changeActivedInd} = documentSetSlice.actions;
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectDocumentList = state => state.documentSet.documentList;
export const selectActivedDocInd = state => state.documentSet.activedDocInd;

export default documentSetSlice.reducer;



// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };


