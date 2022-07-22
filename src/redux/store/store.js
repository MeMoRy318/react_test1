import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {coun1Reducer} from "../slices/count1Slice";

const rootReducers = combineReducers({
    coun1Reducer
});

const store = configureStore({
    reducer:rootReducers
});

export {store}