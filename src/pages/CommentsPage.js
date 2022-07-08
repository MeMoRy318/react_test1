import {Outlet} from "react-router-dom";

import CommentsComponent from "../componets/commentsComponent/CommentsComponent";

export default function CommentsPage () {
return (
    <div>
        <Outlet/>
        <h2>All comments</h2>
        <CommentsComponent/>
    </div>
);
}
