import {createSlice} from "@reduxjs/toolkit";
import initialState from "./initialState";
import reducers from "./reducers";


const theme = createSlice({
    name: "translation",
    initialState,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    reducers: reducers,
});

/*export const {switchTheme} = index.tsx.actions;*/

export default theme.reducer;