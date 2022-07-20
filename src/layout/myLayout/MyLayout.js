import {Header} from "../../components";
import {Outlet} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

function MyLayout () {
    const dispatch = useDispatch();

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => dispatch({type:"LOAD_USERS" , payload:value}))

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(value => value.json())
            .then(value => dispatch({type:"LOAD_POSTS" , payload:value}))
    },[])

return (
    <div>
        <Header/>
        <Outlet/>
    </div>
);
}
export {MyLayout}