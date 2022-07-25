import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducers = combineReducers({
    
});

const setUpStore = () => configureStore({
    reducer:rootReducers
});

export {setUpStore}