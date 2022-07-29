import css from './Header.module.css'
import {useNavigate} from "react-router-dom";
const Header = () => {

    const navigate = useNavigate();

    return (
        <div className={css.Header}>
            <button onClick={()=>navigate('/login')}>login</button>
            <button onClick={()=>navigate('register')}>register</button>
        </div>
    );
};

export {Header};