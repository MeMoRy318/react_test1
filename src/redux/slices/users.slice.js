import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    users:[],
    isLoading:false,
    serverEror:null
};

const getUsers = createAsyncThunk(
    'usersSlice/getUsers',
    async (_,{rejectWithValue}) =>{
        try {
            const users = await fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => {
                    if (!response.ok){

                        throw Error ("bad recvest !!!")
                    }
                    return response.json()
                })
            return users
        }
        catch (e) {
            return rejectWithValue(e.message)

        }
    }
);

const usersSlice = createSlice({
    name:"usersSlice",
    initialState,
    extraReducers:{
        [getUsers.fulfilled]:(state,action)=>{
            state.isLoading = false
            state.users = action.payload
        },
        [getUsers.pending]:(state) =>{
            state.isLoading = true
        },
        [getUsers.rejected]:(state,action)=>{
            state.serverEror = action.payload
        },


    }


});

const {reducer:usersReduser} = usersSlice

const usersAction = {
    getUsers,
}
export {usersReduser,usersAction}