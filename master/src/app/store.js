import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import documentSetReducer from '@/features/document_set';
import nodeTreeReducer from '@/features/node_tree';
import pluginReducer from '@/features/plugin';
import buildProfileReducer from '@/features/build_profile';

export default configureStore({
    reducer: {
        documentSet: documentSetReducer,
        nodeTree: nodeTreeReducer,
        buildProfile: buildProfileReducer,
        plugin: pluginReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    // preloadedState,
    // enhancers: [reduxBatch],
});