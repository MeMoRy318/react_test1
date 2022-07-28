//================================================import===============================================================
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {authServices} from "../../services";
//=============================================initialState=============================================================
const initialState = {

error:null

};
//=========================================authSlice/register===========================================================
const register = createAsyncThunk(
    'authSlice/register',
    async ({user}, {rejectWithValue})=>{
try {
   await authServices.register(user)

}catch (e) {

    return rejectWithValue(e.response.date)
}

    }
);
//==================================================authSlice===========================================================
const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{},

extraReducers:(builder)=>{
        builder
            .addDefaultCase((state, action)=>{
              const [type] =  action.type.split("/").splice(-1)
                if (type === "rejected"){
                    state.error = action.payload

                }
            })
    }
});
//==============================================authReduser=============================================================

const {reducer:authReduser,actions} = authSlice

//===============================================authAction=============================================================

const authAction = {
register,

}

//=================================================export===============================================================
export {authReduser,authAction}