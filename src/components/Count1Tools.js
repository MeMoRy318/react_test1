import {useDispatch} from "react-redux";

import {caunt1Action} from "../redux/slices";

const Count1Tools = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>dispatch(caunt1Action.inc())}>inc</button>
            <button onClick={()=>dispatch(caunt1Action.dec())}>dec</button>
            <button onClick={()=>dispatch(caunt1Action.reset())}>reset</button>
            <button onClick={()=>dispatch(caunt1Action.getUsers())}>users</button>
        </div>
    );
};

export {Count1Tools};