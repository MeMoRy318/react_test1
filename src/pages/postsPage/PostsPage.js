import {useSelector} from "react-redux";
import {Post} from "../../components";

function PostsPage () {

    const {posts} = useSelector(item => item);
return (
    <div>
        {posts.map(value => <Post key={value.id} item={value}/>)}
    </div>
);
}
export {PostsPage}