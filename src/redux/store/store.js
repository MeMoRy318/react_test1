import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {usersReduser} from "../slices/usersSlice";

const rootReducers = combineReducers({
usersReduser
});

const store = configureStore({
    reducer:rootReducers
});

export {store}