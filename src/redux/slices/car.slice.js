import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsServices} from "../../services";

const initialState = {
    cars:[],
    carForUpdate:null
};

const getAll = createAsyncThunk(
    'carsSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
          const {data} = await carsServices.getAll()
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const deleteCar  = createAsyncThunk(
    'carsSlice/delete',
    async ({id}) =>{
        await carsServices.deleteById(id)
        return id
    }
);
const createCar = createAsyncThunk(
    'carsSlice/create',
    async ({car})=>{
      const {data} = await carsServices.createCar(car)
        return data
    }
);

const updateById = createAsyncThunk(
    'carsSlice/updateById',
    async ({id,car}) =>{
        const {data} = await carsServices.updateById(id,car)
        return data
    }
);

const carsSlice = createSlice({

    name:'carsSlice',
    initialState,
    reducers:{
        setCarForUpdate:(state, action)=>{
            state.carForUpdate = action.payload
        }
    },

    extraReducers:{
        [getAll.fulfilled]:(state,action)=>{
            state.cars = action.payload
        },
        [updateById.fulfilled]:(state,action)=>{
        const find = state.cars.find(value => value.id === action.payload.id)
            Object.assign(find,action.payload)
            state.carForUpdate = null

        },
        [createCar.fulfilled]:(state,action)=>{
            state.cars.push(action.payload)
        },
        [deleteCar.fulfilled]:(state,action)=>{
            const index = state.cars.findIndex(value => value.id === action.payload)
            state.cars.splice(index,1)
        }
    }

});

const {reducer:carReduser,actions:{setCarForUpdate}} = carsSlice

const carAction= {
    getAll,
    setCarForUpdate,
    updateById,
    createCar,
    deleteCar
}

export {carReduser,carAction}