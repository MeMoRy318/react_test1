import {useDispatch} from "react-redux";

import {carsAction} from "../../redux/slices";

const Car = ({car}) => {

    const dispatch = useDispatch();

    return (
        <div>
            <div>

                <div>{car.id}</div>
                <div>{car.model}</div>
                <div>{car.price}</div>
                <div>{car.year}</div>

                <button onClick={()=>dispatch(carsAction.upDateCar(car))}>update</button>
                <button onClick={()=>dispatch(carsAction.deleteCar({id:car.id}))}>delete</button>

            </div>
            <br/>

        </div>
    );
};

export {Car};