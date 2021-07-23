import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as axios from 'axios';
// thunk action function here
export const getKeywordSearchResult = createAsyncThunk(
    'searchStructure/getKeywordSearchResult',
    // The payload creator receives the partial `{title, content, user}` object
    async keyword => {
        // We send the initial data to the fake API server
        const response = await axios({
            url: 'http://localhost:3000/api/search/keyword',
            method: 'post',
            headers: {'Content-Type': 'multipart/form-data;charset=UTF-8'},
            data: {keyword},
        });
        // The response includes the complete post object, including unique ID
        return response.data;
    }
)

export const SearchStructureSlice = createSlice({
    name: 'searchStructure',
    initialState: {
        showAddKeywordDialog: false,
        termCorpus: [
            {
                type: "keyword",
                category: "Issue",
                keywords: [
                    "error",
                    "warning",
                    "fail",
                ],
            },
            {
                type: "keyword",
                category: "Certificate",
                keywords: [
                    "Certificate",
                    "CertificateCertificate",
                    "CertificateCertificateCertificate",
                ],
            },
            {
                type: "keyword",
                category: "Incoming Remote Call",
                keywords: [
                    "Call",
                    "CallCall",
                    "CallCallCall",
                ],
            },
            {
                type: "keyword",
                category: "Scheduler",
                keywords: [
                    "Scheduler",
                    "SchedulerScheduler",
                    "SchedulerScheduler",
                ],
            },
        ],
    },
    reducers: {
        addKeywords: (state, action) => {
            const { category, keywords } = action.payload;
            state.termCorpus.push({
                type: "keyword",
                category: category,
                keywords: "\n".split(keywords),
            });
            // state.termCorpus.filter(e => e.category == category).map(e => e.keywords.push(keyword));
        },
        removeKeywords: (state, action) => {
            const { category, keywords } = action.payload;
            state.termCorpus.filter(e => e.category == category).map(e => e.keywords = e.keywords.filter(k => k != keyword));
        },
        setShowAddKeywordDialog: (state, action) => {
            if (typeof action.payload === 'boolean') {
                state.showAddKeywordDialog = action.payload;
            }
        },
        updateSearchTree: (state, action) => {
            state.termCorpus = action.payload;
        },
    },
});

export const { addKeywords, removeKeywords, setShowAddKeywordDialog, updateSearchTree, } = SearchStructureSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTermCorpus = state => state.searchStructure.termCorpus;
export const selectShowAddKeywordDialog = state => state.searchStructure.showAddKeywordDialog;

export default SearchStructureSlice.reducer;