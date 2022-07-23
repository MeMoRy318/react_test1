import {useDispatch} from "react-redux";
import {comentsAction} from "../redux/slices/coments.slice";

const ComentsButton = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=> dispatch(comentsAction.getComents())}>coments</button>
        </div>
    );
};

export {ComentsButton};