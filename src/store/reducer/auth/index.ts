import {createSlice} from "@reduxjs/toolkit";
import initialState from "./initialState";
import reducers from "./reducers";


const auth = createSlice({
    name: "auth",
    initialState,
    reducers,
});

/*export const {switchTheme} = index.actions;*/

export default auth.reducer;