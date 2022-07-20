import {Route, Routes} from "react-router-dom";

import {MyLayout} from "./layout";
import {PostsPage, UsersPage} from "./pages";

function App() {

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
