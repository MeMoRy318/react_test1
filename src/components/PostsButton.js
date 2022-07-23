import {useDispatch} from "react-redux";
import {actionReduser} from "../redux/slices";

const PostsButton = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>{
                dispatch(actionReduser.getPost())
            }}>posts</button>
        </div>
    );
};

export {PostsButton};