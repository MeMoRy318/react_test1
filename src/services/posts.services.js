import {axiosServices} from "./axios.services";
import {urls} from "../constans";

export const postsServices = {
    getAllPosts:()=>axiosServices.get(urls.posts)
};