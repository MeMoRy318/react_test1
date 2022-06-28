import Users from "./users/Users";
import {useState} from "react";
import {getPosts} from "./services/Services.Api";
import Post from "./post/Post";

function App() {
    const [post,setPost] = useState([])
    const postsId = (id) => {

        getPosts(id).then(({data}) => setPost([...data]) )

    }
  return (
    <div>
        {post.map((value,index) => <Post key={index} item={value}/>)}
<Users postId={postsId}/>
    </div>
  );
}

export default App;
