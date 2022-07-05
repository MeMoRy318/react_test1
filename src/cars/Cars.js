import {useEffect, useState} from "react";
import {carServices} from "../services";
import Car from "../car/Car";
import FormCar from "../formCar/FormCar";

export default function Cars () {
    const [cars,setCars] = useState([])
    const [car,setCar] = useState({})

    useEffect(()=>{
        carServices.getAll().then(({data}) =>setCars(data))
    },[])

    const updateCar = (carObj) =>{
      const res =[...cars]
      const find = res.find(value => value.id === carObj.id)
        Object.assign(find,carObj)
        setCars(res)
        setCar({})
    }

    const deleteCar = async (id) =>{
       await carServices.deleteById(id)
        const arrCars = [...cars]
       const index = arrCars.findIndex(value => value.id === id)
        arrCars.splice(index,1)
        setCars(arrCars)
    }

return (
    <div>
        <hr/>
        <FormCar setCars={setCars} cars={cars} car={car} updateCar={updateCar}/>
        <hr/>
        {cars.map(value => <Car key={value.id} cars={value} deleteCar={deleteCar} setCar={setCar}  />)}
    </div>
);
}
