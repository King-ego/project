import {combineReducers, configureStore} from "@reduxjs/toolkit";
import test from "./reducer/test";

const store = configureStore({
    reducer: {test: test}
})

store.subscribe(()=> console.log(store.getState()))

const rootReducer = combineReducers({
    test: test,
    // Outros reducers...
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;