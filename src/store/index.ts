import {combineReducers, configureStore} from "@reduxjs/toolkit";
import theme from "./reducer/theme";

const store = configureStore({
    reducer: {
        theme: theme
    }
})

/*store.subscribe(()=> console.log(store.getState()))*/

const rootReducer = combineReducers({
    theme: theme
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;