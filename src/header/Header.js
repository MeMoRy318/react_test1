import {Link,Outlet} from "react-router-dom";

export default function Header () {
return (
    <div>
        <div>
            <h2>Menu</h2>
            <ul>
                <li><Link to={"todos"}>todos</Link></li>
                <li><Link to={"albums"}>albums</Link></li>
                <li><Link to={"comments"}>comments</Link></li>
            </ul>
        </div>
        <Outlet/>
    </div>
);
}
