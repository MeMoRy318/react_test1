import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {authAction} from "../../redux/slices";

const RegisterForm = () => {

    const {register,handleSubmit} = useForm();

    const dispatch = useDispatch();

   const submit = async (data)=> {
      const res = await dispatch(authAction.register({user:data}))
       console.log(res,data)

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type={"text"} placeholder={"login"} {...register('login')}/>
            <input type={"text"} placeholder={"password"} {...register('password')}/>

            <button>register</button>
        </form>
    );
};

export {RegisterForm};