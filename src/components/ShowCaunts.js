import {useSelector} from "react-redux";

import {caunt1Reduser} from "../redux/slices";

const ShowCaunts = () => {

    const {count1,users,isLoading,serverEror} = useSelector(state => state.caunt1Reduser);
    const {count2} = useSelector(state => state.caunt2Reduser);

    return (
        <div>



            <h1>Count1: {count1}</h1>
            <h1>Count2: {count2}</h1>

            {serverEror && <h1>{serverEror}</h1>}
            {isLoading && <h1>Loading</h1>}
            {JSON.stringify(users)}

        </div>
    );
};

export {ShowCaunts};