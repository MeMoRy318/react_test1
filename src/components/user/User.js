import {useDispatch} from "react-redux";

function User ({item}) {
    const dispatch = useDispatch();
return (
    <div>
        <div>
            <div>{item.id}</div>
            <div>{item.username}</div>
            <div>{item.name}</div>
            <button onClick={()=> dispatch({type:"GET_USER",payload:item.id})}>detalis</button>
        </div>
      <br/>
    </div>
);
}
export {User}