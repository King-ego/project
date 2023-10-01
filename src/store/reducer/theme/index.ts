import {createSlice} from "@reduxjs/toolkit";
import initialState from "./initialState";
import reducers from "./reducers.ts";


const index = createSlice({
    name: "theme",
    initialState,
    reducers,
});

export const {switchTheme} = index.actions;

export default index.reducer;