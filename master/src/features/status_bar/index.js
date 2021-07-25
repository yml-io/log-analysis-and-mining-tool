import { createSlice } from "@reduxjs/toolkit";

export const StatusBarSlice = createSlice({
    name: 'statusBar',
    initialState: {
        isSyncing: true,
        statistic: {
            warn: 2,
            error: 0,
        },
        notifications: ["aaaaa"],
    },
    reducers: {
        setIsSyncing: (state, action) => {
            if (typeof action.payload === 'boolean') {
                state.isSyncing = action.payload;
            }
        },
        setStatistic: (state, action) => {
            if (typeof action.payload === 'object') {
                state.statistic = Object.assign(state.statistic, action.payload);
            }
        },
        pushNewNotification: (state, action) => {
            state.notifications.push(action.payload);
        },
    },
});

export const { setIsSyncing, setStatistic, pushNewNotification, } = StatusBarSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectIsSyncing = state => state.statusBar.isSyncing;
export const selectStatistic = state => state.statusBar.statistic;
export const selectNotifications = state => state.statusBar.notifications;


export default StatusBarSlice.reducer;