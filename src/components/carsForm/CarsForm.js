import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {carAction} from "../../redux/slices";

const CarsForm = () => {

    const {reset,setValue,register,handleSubmit} = useForm()
    const dispatch = useDispatch();

    const {carForUpdate} = useSelector(state => state.carReduser);

    useEffect(()=>{
        if (carForUpdate){
            setValue('model',carForUpdate.model)
            setValue('price',carForUpdate.price)
            setValue('year',carForUpdate.year)
        }
    },[carForUpdate])

   const submit = async (data) => {
        if (carForUpdate){
            await dispatch(carAction.updateById({id:carForUpdate.id,car:data}))
        }else {
          await  dispatch(carAction.createCar({car:data}))
        }
       reset()


   }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="text" placeholder={'price'} {...register('price',{valueAsNumber:true})}/>
            <input type="text" placeholder={'year'} {...register('year',{valueAsNumber:true})}/>
            <button>submit</button>
        </form>
    );
};

export {CarsForm};