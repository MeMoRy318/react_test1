import {useSelector} from "react-redux";

const Coments = () => {
    const {coments,isLoading, error} = useSelector(state => state.comentsReduser);
    return (
        <div>
            {error && <h1>{error}</h1>}
            {isLoading && <h1>loading</h1>}
            {JSON.stringify(coments)}
            
        </div>
    );
};

export {Coments};