import {axiosServices} from "./axios.services";
import {urls} from "../constans";

const carsServices = {
    getAll:() => axiosServices.get(urls.cars),
    updateById: (id, data) => axiosServices.put(`${urls.cars}/${id}`, data),
    deleteById: (id) => axiosServices.delete(`${urls.cars}/${id}`),
    create:(car)=>axiosServices.post(urls.cars, car)
};

export {carsServices}