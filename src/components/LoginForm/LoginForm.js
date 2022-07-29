import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {authActions} from "../../redux";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {

    const {register,handleSubmit} = useForm();

    const dispatch = useDispatch();

    const navigate = useNavigate();

   const submit = async (data) => {
     const {error} = await dispatch(authActions.login({user:data}))
       if (!error){
           navigate('/cars')
       }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type={'text'} placeholder={'login'} {...register('username')}/>
            <input type={'text'} placeholder={'password'} {...register('password')}/>
            <button>login</button>
        </form>
    );
};

export {LoginForm};