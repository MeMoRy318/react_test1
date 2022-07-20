import {useDispatch, useSelector} from "react-redux";

import {usersStore} from "../../redux/reducers/users.store";

function User ({user}) {
    const {usersStore} = useSelector(state => state);
    const dispatch = useDispatch();

return (
    <div>
        <div>
            <div>{user.id} - {user.name}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <button onClick={()=>dispatch({type:"GET_USER", payload:{id:user.id,data:usersStore}})}>Detalis</button>

        </div>
      <br/>
    </div>
);
}
export {User}