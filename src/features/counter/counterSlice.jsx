import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 5,  // can name we want
};

export const counterSlice = createSlice({
    name: "counter", // variable name
    initialState,
    reducer: {
        //increment
        incremented(state) {
            // it's okay to do this because "immer" makes it work
            // under the hood
            state.value++;
        },
        //decrement
        decremented(state) {
            state.value--;
        },
        amountAdded(state, action) {
            state.value += action.payload;
        },
    },
});

export const { incremented, decremented, amountAdded } = counterSlice.actions;

export default counterSlice.reducer;  // export the reducer functions