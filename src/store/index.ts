import {combineReducers, configureStore} from "@reduxjs/toolkit";
import theme from "./reducer/theme";
import translation from "./reducer/translation";
import auth from "./reducer/auth";

const store = configureStore({
    reducer: {
        theme,
        translation,
        auth,
    }
})

/*store.subscribe(()=> console.log(store.getState()))*/

const rootReducer = combineReducers({
    theme,
    translation,
    auth,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;