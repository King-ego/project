
import {ThemeState} from "./initialState";

const reducers = {
    switchTheme: (state: ThemeState) => {
        const newTheme = state.type === "light" ? "dark" : "light"
        localStorage.setItem("theme", newTheme);
        state.type = newTheme;
    },
    getTheme: (state: ThemeState) => {
        const existTheme = localStorage.getItem("theme");
        if(existTheme) {
            state.type = existTheme as unknown as "light" | "dark"
        } else {
            localStorage.setItem("theme", "light")
        }

    }
}

export default reducers;