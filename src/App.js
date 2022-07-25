import {Navigate, Route, Routes} from "react-router-dom";

import {CarsPage, LoginPage, RegisterPage} from "./pages";

import {MyLoyout} from "./loyouts";

function App() {

  return (
    <Routes>
      <Route path={""} element={<MyLoyout/>} >
        <Route index element={<Navigate to={"login"}/>}/>
        <Route path={"login"} element={<LoginPage/>}/>
        <Route path={"register"} element={<RegisterPage/>}/>
        <Route path={"cars"} element={<CarsPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
