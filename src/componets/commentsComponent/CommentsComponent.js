import {useEffect, useState} from "react";

import {servicesJPH} from "../../services";
import CommentComponent from "../commentComponent/CommentComponent";

export default function CommentsComponent () {
    const [comments,setComments] = useState([])
    useEffect(()=>{
        servicesJPH.getAllcomments().then(({data}) =>setComments([...data]))
    },[])
return (
    <div>
        {comments.map(value =><CommentComponent key={value.id} item={value}/>)}

    </div>
);
}
