import {useDispatch} from "react-redux";
import {usersAction} from "../redux/slices/users.slice";

const UsersButton = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>dispatch(usersAction.getUsers())}>users</button>
        </div>
    );
};

export {UsersButton};