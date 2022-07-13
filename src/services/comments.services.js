import {axiosServices} from "./axios.services";
import {urls} from "../constans";

export const commentsServices = {
    getAllComments:()=>axiosServices.get(urls.comments)
};