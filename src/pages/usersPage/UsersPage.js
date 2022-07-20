import {useSelector} from "react-redux";
import {User} from "../../components";

function UsersPage () {

    const {users} = useSelector(value => value);
    const {user} = useSelector(state => state);

return (
    <div>
        {user.email}
        {users.map(value => <User key={value.id} item={value}/>)}

    </div>
);
}
export {UsersPage}