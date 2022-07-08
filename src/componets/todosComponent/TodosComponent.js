import {useEffect, useState} from "react";

import {servicesJPH} from "../../services";
import TodoComponent from "../todoComponent/TodoComponent";

export default function TodosComponent () {
    const [todos,setTodos] = useState([])
    useEffect(()=>{
        servicesJPH.getAlltodos().then(({data}) => setTodos([...data]))
    },[])
return (
    <div>
        {todos.map(value => <TodoComponent key={value.id} item={value}/>)}
    </div>
);
}
