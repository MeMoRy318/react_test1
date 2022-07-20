import {useDispatch, useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";

import {MyLayout} from "./layout";
import {PostsPage, UsersPage} from "./pages";

function App() {
const state = useSelector(state => state )
const dispatch = useDispatch();

  return (
      <Routes>
          <Route path={"/"} element={<MyLayout/>}>
           <Route path={"users"} element={<UsersPage/>}/>
           <Route path={"posts"} element={<PostsPage/>}/>
          </Route>
      </Routes>

  );
}

export default App;
