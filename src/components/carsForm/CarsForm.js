import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carsAction} from "../../redux/slices";

const CarsForm = () => {

    const {reset,setValue,register,handleSubmit} = useForm()

    const {upCar} = useSelector(state => state.carsReduser);
    const dispatch = useDispatch();

    useEffect(()=>{
        if (upCar){
            setValue('model',upCar.model)
            setValue('price',upCar.price)
            setValue('year',upCar.year)
        }
    },[upCar])

    const onSubmit = async (data) => {
        if (upCar){
            await dispatch(carsAction.carForUpdate({id:upCar.id,car:data}))
        }else {
            await dispatch(carsAction.createCar({car:data}))
        }
        reset()
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="text" placeholder={'price'} {...register('price',{valueAsNumber:true})}/>
            <input type="text" placeholder={'year'} {...register('year',{valueAsNumber:true})}/>

            <button>{upCar ? "update" : "create"}</button>

        </form>
    );
};

export {CarsForm};