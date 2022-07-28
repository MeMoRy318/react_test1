import {createSlice} from "@reduxjs/toolkit";

const initialState={
    cars:[]
};

const carsSlice = createSlice({
    name:"carsSlice",
    initialState,
    reducers:{},
    extraReducers:{}
});

const {reducer:carsReducer} = carsSlice;

const carsAction = {

}

export {carsReducer,carsAction}