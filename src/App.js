import {Navigate, Route, Routes} from "react-router-dom";

import {MyLayout} from "./layouts";
import {PageCars, PageLogin, PageRegister} from "./pages";

const App = () => {
  return (
      <Routes>
        <Route path={""} element={<MyLayout/>}>
            <Route index element={<Navigate to={"login"}/>}/>
            <Route path={"login"} element={<PageLogin/>}/>
            <Route path={"register"} element={<PageRegister/>}/>
            <Route path={"cars"} element={<PageCars/>}/>
        </Route>
      </Routes>
  );
};

export default App;
