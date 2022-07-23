import {useSelector} from "react-redux";

const Users = () => {

    const {users,isLoading,serverEror} = useSelector(state => state.usersReduser);

    return (
        <div>


            {isLoading && <h1>loading</h1>}

            {JSON.stringify(users)}
            {serverEror && <h1>{serverEror}</h1>}


        </div>
    );
};

export {Users};