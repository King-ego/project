import {createSlice} from "@reduxjs/toolkit";

const test = createSlice({
    name: "test",
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
});

export const {increment, decrement, incrementByAmount} = test.actions;

export default test.reducer;