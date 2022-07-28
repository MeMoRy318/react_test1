import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {authReduser, carsReducer} from "./slices";




const rootReducers = combineReducers({
   cars:carsReducer,
   auth:authReduser
});

const setUpStore = configureStore({
    reducer:rootReducers
});

export {setUpStore}