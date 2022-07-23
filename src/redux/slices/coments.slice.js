import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    coments:[],
    isLoading:false,
    error:null

};

const getComents = createAsyncThunk(
    'comentSlice/getComents',
    async (_,{rejectWithValue})=>{
        try {
const coments = await fetch('https://jsonplaceholder.typicode.com/commens')
    .then(respons => {
        if (!respons.ok){
            throw Error ('bad recvest !!!')
        }
        return respons.json()
    })
            return coments
        }
        catch (e) {

            return rejectWithValue(e.message)

        }
    }
);

const comentsSlice = createSlice({
    name:'comentsSlice',
    initialState,
    extraReducers:{
        [getComents.fulfilled]:(state,action)=>{
            state.isLoading = false
            state.coments = action.payload
        },
        [getComents.pending]:(state,action)=>{
            state.isLoading = true
        },
        [getComents.rejected]:(state,action) =>{
            state.error = action.payload
        }

    }
});

const {reducer:comentsReduser} = comentsSlice

const comentsAction = {
    getComents
}

export {comentsAction,comentsReduser}