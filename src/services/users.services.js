import {axiosServices} from "./axios.services";
import {urls} from "../constans";

export const usersServices = {
    getAllUsers:()=> axiosServices.get(urls.users)
};