import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carsReduser} from "./slices";

const rootReducers = combineReducers({
    carsReduser
});

const setUpStore = () => configureStore({
    reducer:rootReducers
});

export {setUpStore}