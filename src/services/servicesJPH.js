import {axiosServices} from "./axiosServices";
import {urls} from "../urls";

export const servicesJPH = {
    getAlltodos:() =>axiosServices.get(urls.todos),
    getAllalbums:() =>axiosServices.get(urls.albums),
    getAllcomments:() =>axiosServices.get(urls.comments),
    getOnePost:(id) =>axiosServices.get(`${urls.users}/${id}${urls.posts}`),
}