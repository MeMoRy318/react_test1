import {useEffect, useState} from "react";
import {getUsers} from "../services/Services.Api";
import User from "../user/User";

export default function Users ({postId}) {
    const [users,setUsers] = useState([]);
    useEffect(() =>{
        getUsers().then(({data}) => setUsers([...data]))
    },[]);
return (
    <div>
        { users.map(value => <User key={value.id} item={value} postId={postId}/>)}
    </div>
);
}
