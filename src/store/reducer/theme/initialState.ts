export interface ThemeState {
    type: "light" | "dark";
}


const initialState: ThemeState = {
    type: "light",
};

export default initialState;