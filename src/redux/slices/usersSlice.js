import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

let initialState = {
    users:[]
};

const getUsers = createAsyncThunk(
    'usersSlice/getUsers',
    async ()=>{
        const users = await fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
        return users
    }
);
const usersSlice = createSlice({
    name:"usersSlice",
    initialState,
    extraReducers:{
        [getUsers.fulfilled]:(state,action)=>{
            return state.users = action.payload
        }
    }

});

const {reducer:usersReduser} = usersSlice

const usersAction = {
    getUsers
}

export {usersAction,usersReduser}