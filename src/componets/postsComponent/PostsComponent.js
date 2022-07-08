import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {servicesJPH} from "../../services";
import PostComponent from "../postComponent/PostComponent";

export default function PostsComponent () {
const {postId} = useParams()
    const [post,setPost]=useState([])
    useEffect(()=>{
servicesJPH.getOnePost(postId).then(({data}) =>setPost([...data]))
    },[postId])
return (
    <div>
        {post.map(value => <PostComponent key={value.id} item={value}/>)}
    </div>
);
}
