import {combineReducers, configureStore} from "@reduxjs/toolkit";
import theme from "./reducer/theme";
import translation from "./reducer/translation";

const store = configureStore({
    reducer: {
        theme: theme,
        translation: translation,
    }
})

/*store.subscribe(()=> console.log(store.getState()))*/

const rootReducer = combineReducers({
    theme: theme,
    translation: translation,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;