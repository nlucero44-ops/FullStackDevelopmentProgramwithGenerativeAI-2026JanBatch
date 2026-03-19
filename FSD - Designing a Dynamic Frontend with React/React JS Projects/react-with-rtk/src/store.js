import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slice';

let storeRef = configureStore({
    reducer:counterReducer
})

export default storeRef;