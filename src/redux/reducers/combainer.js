import {combineReducers} from "redux";

import {postsStore} from "./posts.store";
import {usersStore} from "./users.store";
import {userStore} from "./user.store";

export const reducers = combineReducers({postsStore:postsStore,usersStore:usersStore,userStore:userStore});