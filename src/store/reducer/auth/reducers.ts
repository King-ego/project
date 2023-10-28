import {AuthState} from "./initialState";

const reducers = {
    getToken: (state: AuthState) => {
        const existTheme = localStorage.getItem("token-api");
        state.token = existTheme;
    },
    setToken: (state: AuthState, action: { payload: string }) => {
        localStorage.setItem("token-api", action.payload);
        state.token = action.payload;
    },
    deleteToken(state: AuthState) {
        localStorage.removeItem("token-api")
        state.token = null;
    }
}

export default reducers;