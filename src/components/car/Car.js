import {useDispatch} from "react-redux";

import {carAction} from "../../redux/slices";

const Car = ({car}) => {

    const dispatch = useDispatch();
    return (
        <div>
            <div>id : {car.id}</div>
            <div>model : {car.model}</div>
            <div>price : {car.price}</div>
            <div>year : {car.year}</div>
            <br/>
            <button onClick={()=> dispatch(carAction.setCarForUpdate(car))}>update</button>
            <button onClick={()=> dispatch(carAction.deleteCar({id:car.id}))}>delete</button>
        </div>
    );
};

export {Car};