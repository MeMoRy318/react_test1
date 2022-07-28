import css from './Header.model.css'

import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    return (
        <div className={"Header"}>
            <div >
                <button className={'btn'} onClick={()=> navigate('/login') }>login</button>
                <button onClick={()=> navigate('/register')}>register</button>
            </div>
        </div>
    );
};

export {Header};