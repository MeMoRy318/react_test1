import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    count1:0,
    users:[],
    isLoading:false,
    serverEror:null
};

const getUsers = createAsyncThunk(
    'caunt1Slice/getUsers',
    async (_,{rejectWithValue})=>{
        try {
            const users = await fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => {
                   if (!response.ok){
                       throw Error ("bad recvest !!!")
                   }
                   return response.json()
                });
             return users
        }catch (e) {
           return  rejectWithValue(e.message)

        }


    }

);

const caunt1Slice = createSlice({
    name:"caunt1Slice",
    initialState,
    reducers:{
        dec:(state, action) => {++state.count1},
        inc:(state, action) => {--state.count1},
        reset:(state, action) => {state.count1 = 0},

    },
    extraReducers:{
        [getUsers.fulfilled]:(state,action)=>{
            state.isLoading = false
            state.users = action.payload
        },
        [getUsers.pending]:(state,action) =>{
            state.isLoading = true
        },
        [getUsers.rejected]:(state,action)=>{
            state.serverEror = action.payload
        }
    }
});

const {reducer:caunt1Reduser,actions:{dec,inc,reset}} = caunt1Slice;

const caunt1Action = {
    dec,inc,reset,getUsers
};

export {caunt1Action,caunt1Reduser}