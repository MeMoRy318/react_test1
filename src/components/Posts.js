import {useSelector} from "react-redux";

const Posts = () => {

    const {posts,isLoading,error} = useSelector(state => state.postsReduser);

    return (
        <div>

            {error && <h1>{error}</h1>}
            {isLoading && <h1>Loading</h1>}
            {posts.length !== 0 && JSON.stringify(posts)}

        </div>
    );
};

export {Posts};