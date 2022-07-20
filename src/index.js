import ReactDOM from 'react-dom/client';
import React from "react";

import App from './App';

import {Provider} from "react-redux";
import {createStore} from "redux";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore((state = {users:[],posts:[],user:[],post:[]}, action)=>{
switch (action.type){
    case "LOAD_USERS":
        return { ...state,users:action.payload}
    case "LOAD_POSTS":
        return {...state,posts:action.payload}
    case "GET_USER":
    return {...state,user:state.users.find(value => value.id === action.payload)}
    case "GET_POST":
        return {...state,post:state.posts.find(value => value.id === action.payload)}
    default :
        return state;
}
})

root.render(

    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

