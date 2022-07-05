import {useForm} from "react-hook-form";
import {carServices} from "../services";
import {useEffect} from "react";

export default function FormCar ({setCars,cars,car,updateCar}) {
    const {register,handleSubmit,reset,setValue,formState:{errors}} = useForm()

   useEffect(()=>{
       if (car.id){
           setValue("model",car.model)
           setValue("price",car.price)
           setValue("year",car.year)
       }
   }, [car])

    function onSubmit(data) {
        if (car.id){
          carServices.updateById(car.id,data).then(({data}) => updateCar(data))
            reset()
        }else {
            carServices.create(data).then(({data}) => setCars([...cars,data]))
            reset()
        }

    }

    return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type={"text"} placeholder={"model"} {...register("model",{
                pattern:new RegExp(/^[A-Za-z]{3,20}$/)
            })}/>
            <input type={"text"} placeholder={"year"} {...register("year",{
                max:new Date().getFullYear(),
                min:1990,
                valueAsNumber:true
            })}/>
            <input type={"text"}placeholder={"price"} {...register("price",{
                max:100000,
                min:1000,
                valueAsNumber:true
            })}/>
            <button>Submit</button>
        </form>
        <div>
            {errors.model && <span>asd</span>}
            {errors.price && <span>asd</span>}
            {errors.year && <span>asd</span>}
        </div>
    </div>
);
}
