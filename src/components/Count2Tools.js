import {useDispatch} from "react-redux";

import {caunt2Action} from "../redux/slices";


const Count2Tools = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>dispatch(caunt2Action.inc(2))}>inc</button>
            <button onClick={()=>dispatch(caunt2Action.dec(3))}>dec</button>
            <button onClick={()=>dispatch(caunt2Action.reset(5))}>reset</button>
        </div>
    );
};

export {Count2Tools};