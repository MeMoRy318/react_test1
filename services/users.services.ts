import axios, {AxiosResponse} from "axios";
import {IUser} from "../interfece/user.interfece";

type AxiosRes<t> = Promise<AxiosResponse<t>>

export const usersServices = {
    getAll:():AxiosRes<IUser[]> =>axios.get(`https://jsonplaceholder.typicode.com/users`),
    getById:(id:number):AxiosRes<IUser>=>axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}

//================================================type==================================================================
const x =()=>{
    return 'aasd'
}

type myType = ReturnType<typeof x>

const asd:myType = "zsdasda"