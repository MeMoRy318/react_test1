import {Route,Routes} from "react-router-dom";

import Layots from "./layots/Layots";
import TodosPage from "./pages/TodosPage";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import PostsPage from "./pages/PostsPage";

function App() {

  return (
    <div>
<Routes>
  <Route path={"/"} element={<Layots/>}>
<Route path={"todos"} element={<TodosPage/>}/>
<Route path={"albums"} element={<AlbumsPage/>}/>
<Route path={"comments"} element={<CommentsPage/>}>
    <Route path={':postId'} element={<PostsPage/>}/>
</Route>
  </Route>
</Routes>
    </div>
  );
}

export default App;
