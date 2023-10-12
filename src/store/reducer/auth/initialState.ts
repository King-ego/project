export interface AuthState {
    token: string | null;
}


const initialState: AuthState = {
    token: null,
};

export default initialState;