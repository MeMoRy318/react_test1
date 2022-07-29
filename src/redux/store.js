import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {authReducer, carReducer} from "./slices";

const rootReducers = combineReducers({
    auth:authReducer,
    cars:carReducer
});

const setupStore = ()=> configureStore({
    reducer:rootReducers
});
export {setupStore}