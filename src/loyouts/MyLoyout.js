import {Header} from "../componets";
import {Outlet} from "react-router-dom";

const MyLoyout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MyLoyout};