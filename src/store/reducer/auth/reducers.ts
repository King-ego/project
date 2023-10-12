import {AuthState} from "./initialState";

const reducers = {
    getToken: (state: AuthState) => {
        const existTheme = localStorage.getItem("token-api");
        state.token = existTheme;
    },
    setToken: (_: AuthState, action: { payload: string }) => {
        localStorage.setItem("token-api", action.payload);
    },
    deleteToken() {
        localStorage.removeItem("token-api")
    }
}

export default reducers;