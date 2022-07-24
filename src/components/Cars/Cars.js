import {Car} from "../car/Car";

import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {carAction} from "../../redux/slices";

const Cars = () => {

    const {cars} = useSelector(state => state.carReduser);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(carAction.getAll())
    },[])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};