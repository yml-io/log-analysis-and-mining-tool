import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const SearchStructureSlice = createSlice({
    name: 'searchStructure',
    initialState: {
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
        addCategory: (state, action) => {
            const category = action.payload;
            state.termCorpus.push({
                type: "keyword",
                category: category,
                keywords: [],
            });
        },
        removeCategory: (state, action) => {
            const category = action.payload;
            state.termCorpus = state.termCorpus.filter(e => e.category != category);
        },
        addKeyword: (state, action) => {
            const { category, keyword } = action.payload;
            state.termCorpus.filter(e => e.category == category).map(e => e.keywords.push(keyword));
        },
        removeKeyword: (state, action) => {
            const { category, keyword } = action.payload;
            state.termCorpus.filter(e => e.category == category).map(e => e.keywords = e.keywords.filter(k => k != keyword));
        },
    },


    extraReducers: {

    }
});

export const { addCategory, removeCategory, addKeyword, removeKeyword } = SearchStructureSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTermCorpus = state => state.searchStructure.termCorpus;

export default SearchStructureSlice.reducer;