import {useSelector} from "react-redux";

const ShowCounts = () => {
    const {count1} = useSelector(state => state.coun1Reducer);
    return (
        <div>

            <h1>{count1}</h1>

        </div>
    );
};

export {ShowCounts};