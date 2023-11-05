import {createSlice} from "@reduxjs/toolkit";
import initialState from "./initialState";
import reducers from "./reducers";


const theme = createSlice({
    name: "theme",
    initialState,
    reducers,
});

/*export const {switchTheme} = index.tsx.actions;*/

export default theme.reducer;