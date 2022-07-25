import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carsAction} from "../../redux/slices";
import {Car} from "../car/Car";

const Cars = () => {

    const dispatch = useDispatch();
    const {cars,isLoading,error,} = useSelector(state => state.carsReduser);

    useEffect(()=>{
        dispatch(carsAction.getAll())
    },[])

    return (
        <div>

            {isLoading && <h1>loading</h1>}
            {error && <h1>error</h1>}

            <div>
                {cars.map(car => <Car key={car.id} car={car}/>)}
            </div>

        </div>
    );
};

export {Cars};