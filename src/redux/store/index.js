import {createStore} from "redux";
import {reducers} from "../reducers/combainer";

export let store = createStore(reducers)