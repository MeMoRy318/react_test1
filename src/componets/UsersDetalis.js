import {useSelector} from "react-redux";

const UsersDetalis = () => {
const {users} = useSelector(state => state.usersReduser);
console.log(users)
    return (
        <div>
            UsersDetalis
        </div>
    );
};

export {UsersDetalis};