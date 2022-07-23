import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {postsReduser, usersReduser} from "./slices";
import {comentsReduser} from "./slices/coments.slice";

const rootReducers = combineReducers({
    usersReduser,
    postsReduser,
    comentsReduser
});

const setupStore= () => configureStore({
    reducer:rootReducers
});

export {setupStore}