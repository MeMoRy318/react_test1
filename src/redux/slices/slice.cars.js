import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carsServices} from "../../services";

const initialState = {
    cars:[],
    isLoading:false,
    error:null,
    upCar:null
};

const getAll = createAsyncThunk(
    'carsSlice/getAllCars',
    async (_,{rejectWithValue}) =>{
        try {
        const {data} = await carsServices.getAll()
            return data
        }catch (e) {
          return  rejectWithValue(e.response.data)
        }
    }
);

const carForUpdate = createAsyncThunk(
    'carsSlice/carForUpdate',
    async ({id,car})=>{
       const {data} = await carsServices.updateById(id,car)
        return data
    }
);

const deleteCar = createAsyncThunk(
    'carsSlice/deleteCar',
    async ({id})=>{
        await carsServices.deleteById(id)
        return id
    }
);

const createCar = createAsyncThunk(
    'carsSlice/createCar',
    async ({car})=>{
        const {data} = await carsServices.create(car);
        return data

    }
);


const carsSlice = createSlice({
    name:'carsSlice',
    initialState,
    reducers:{
        upDateCar:(state, action)=>{
            state.upCar = action.payload
        }
    },
    extraReducers:{
        [getAll.fulfilled]:(state,action)=>{
            state.isLoading = false
            state.error = null
            state.cars = action.payload
        },
        [getAll.pending]:(state)=>{
            state.isLoading = true
        },
        [getAll.rejected]:(state,action)=>{
            state.error = action.payload

        },
        [carForUpdate.fulfilled]:(state,action)=>{
            const find = state.cars.find(value => value.id === action.payload.id)
            Object.assign(find,action.payload)
            state.upCar = null
        },
        [deleteCar.fulfilled]:(state,action)=>{
            const index = state.cars.findIndex(value => value.id === action.payload);
            state.cars.splice(index,1)
        },
        [createCar.fulfilled]:(state,action)=>{
            state.cars.push(action.payload)
        }

    }
});

const {reducer:carsReduser,actions:{upDateCar}} = carsSlice

const carsAction ={
    getAll,
    upDateCar,
    carForUpdate,
    deleteCar,
    createCar

}

export {carsReduser,carsAction}