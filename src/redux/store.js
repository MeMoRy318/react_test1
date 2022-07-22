import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {caunt1Reduser, caunt2Reduser} from "./slices";

const rootReducers = combineReducers({
    caunt1Reduser,
    caunt2Reduser
});

const setupStore =()=> configureStore({
    reducer:rootReducers
});

export {setupStore}