import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import documentSetReducer from '@/features/document_set';
import nodeTreeReducer from '@/features/node_tree';
import pluginReducer from '@/features/plugin';
import searchStructureReducer from '@/features/search_structure';
import buildProfileReducer from '@/features/build_profile';
import activityBarReducer from '@/features/activity_bar';
import statusBarReducer from '@/features/status_bar';

export default configureStore({
    reducer: {
        documentSet: documentSetReducer,
        nodeTree: nodeTreeReducer,
        buildProfile: buildProfileReducer,
        plugin: pluginReducer,
        searchStructure: searchStructureReducer,
        activityBar: activityBarReducer,
        statusBar: statusBarReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    // preloadedState,
    // enhancers: [reduxBatch],
});