import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count2:0
};
const caunt1Slice = createSlice({
    name:"caunt2Slice",
    initialState,
    reducers:{
        dec:(state, action) => {state.count2 += action.payload},
        inc:(state, action) => {state.count2 -= action.payload},
        reset:(state, action) => {state.count2 = action.payload},

    }
});

const {reducer:caunt2Reduser,actions:{dec,inc,reset}} = caunt1Slice;

const caunt2Action = {
    dec,inc,reset
};

export {caunt2Action,caunt2Reduser}