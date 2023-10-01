import {combineReducers, configureStore} from "@reduxjs/toolkit";
import test from "./reducer/test";
import theme from "./reducer/theme";

const store = configureStore({
    reducer: {
        test: test,
        theme: theme
    }
})

/*store.subscribe(()=> console.log(store.getState()))*/

const rootReducer = combineReducers({
    test: test,
    theme: theme
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;