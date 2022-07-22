import {useDispatch} from "react-redux";
import {coun1Actition} from "../../redux";

const Count1Tools = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>dispatch(coun1Actition.dec(1))}></button>
            <button onClick={()=>dispatch(coun1Actition.inc(1))}></button>
            <button onClick={()=>dispatch(coun1Actition.res(0))}></button>
        </div>
    );
};

export {Count1Tools};