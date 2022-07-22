import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count1:0
};

const count1slice = createSlice({
    name:"count1slice",
    initialState,
    reducers:{
        dec:(state, action) => {state.count1 += action.payload},
        inc:(state, action) => {state.count1-= action.payload},
        res:(state, action) => {state.count1 = action.payload}
    }
});

const {reducer:coun1Reducer,actions:{dec,inc,res}} = count1slice;

const coun1Actition = {
    dec,inc,res
};

export {coun1Actition,coun1Reducer}