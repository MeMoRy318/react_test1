import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {authService} from "./auth.service";

const carService = {
    getAll: () => axiosService.get(urls.cars,{
        headers:{
            Authorization:`Bearer ${authService.getAccessToken()}`
        }
    }),
    updateById: (id, data) => axiosService.put(`${urls.cars}/${id}`, data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}
