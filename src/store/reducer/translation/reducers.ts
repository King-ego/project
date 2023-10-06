import {ThemeState} from "./initialState";

const reducers = {
    switchLang: (state: ThemeState, action: { payload: string }) => {
        const newLange = state.lang = action.payload
        localStorage.setItem("lang", newLange);
        state.lang = newLange;
    },
    getLang: (state: ThemeState) => {
        const existTheme = localStorage.getItem("lang");
        if (existTheme) {
            state.lang = existTheme;
        } else {
            localStorage.setItem("lang", "pt-BR");
        }

    }
}

export default reducers;