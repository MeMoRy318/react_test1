import {Outlet} from "react-router-dom";


import PostsComponent from "../componets/postsComponent/PostsComponent";

export default function PostsPage () {
return (
    <div>
        <h2>Posts for comment</h2>
        <PostsComponent/>
    </div>
);
}
