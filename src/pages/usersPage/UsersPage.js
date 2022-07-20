import {useSelector} from "react-redux";
import {User} from "../../components";

function UsersPage () {
const {usersStore,userStore} = useSelector(state => state);
return (
    <div>
        {userStore?.email}
        {
            usersStore.map(user => <User key={user.id} user={user}/>)
        }

    </div>
);
}
export {UsersPage}