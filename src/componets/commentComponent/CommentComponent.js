import {Link} from "react-router-dom";

export default function CommentComponent ({item}) {
return (
    <div>
        <div>
            <div>{item.id} - {item.name}</div>
            <div>{item.email}</div>
            <div>{item.body}</div>
            <span><Link to={item.postId.toString()}>Posts detalis</Link></span>
        </div>

        <br/>
    </div>
);
}
