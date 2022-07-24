import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReduser} from "./slices";

const rootReducers = combineReducers({
    carReduser
});

const setupStore = () => configureStore({
    reducer:rootReducers
});

export {setupStore}