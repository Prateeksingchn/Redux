import { configureStore } from "@reduxjs/toolkit";

const counterSlice from "./reducers/counterSlice";

export const store = configureStore({
    reducer: {
        counterReducer: counterSlice
    },
});