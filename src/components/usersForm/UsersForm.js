import {useForm} from "react-hook-form";

import {axiosPostUser} from "../../services/UsersApiJPH";

export default function UsersForm () {
    const {register,handleSubmit,formState:{errors}} = useForm({defaultValues:{
            name: "Leanne",
            username: "Graham",
            email: "Sincere@april.biz"
        }})

    function onSubmit(data) {
        axiosPostUser(data).then(({data}) => console.log(data)
        )
    }

    return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type={"text"} {...register("name",{pattern: new RegExp(/^[a-zA-Z]{3,20}$/)})}/>
            <input type={"text"} {...register("username",{pattern: new RegExp(/^[a-zA-Z]{3,20}$/)})}/>
            <input type={"text"} {...register("email",{
            pattern: new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )})}/>
            <button>Submit</button>
        </form>
<div>
    {errors.name && <span>Name введен некорректно</span>}
    <br/>
    {errors.username && <span>Username введен некорректно</span>}
    <br/>
    {errors.email && <span>E-Mail введен некорректно или не существует</span>}


</div>
    </div>
);
}
