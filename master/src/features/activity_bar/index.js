import { createSlice } from "@reduxjs/toolkit";

export const activityBarSlice = createSlice({
    name: "activityBar",
    initialState: {
        activityIndex: 0,
        activities: [
            {
                title: "RESOURCE DIAGRAM",
            },
            {
                title: "SEARCH",
            },
            {
                title: "EXTENSIONS",
            }
        ],
    },
    reducers: {
        changeActivityIndex: (state, action) => {
            // check this value here?
            state.activityIndex = action.payload;
        },
    }
});


export const {changeActivityIndex} = activityBarSlice.actions;
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectActivityIndex = state => state.activityBar.activityIndex;
export const selectCurrentActivity = state => state.activityBar.activities[state.activityBar.activityIndex]

export default activityBarSlice.reducer;



// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };


