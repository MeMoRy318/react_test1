import {Link} from "react-router-dom";

function Header () {
return (
    <div>
        <ul>
            <li><Link to={"/"}>home</Link></li>
            <li><Link to={"users"}>users</Link></li>
            <li><Link to={"posts"}>posts</Link></li>
        </ul>
    </div>
);
}
export {Header}