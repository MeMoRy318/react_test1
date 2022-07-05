import {axiosServices} from "./axios.services";
import { urls} from "../constans";


export const carServices =
    {

        getAll:() => axiosServices.get(urls.car),
        create:(car) => axiosServices.post(urls.car,car),
        updateById:(id,car)=> axiosServices.put(`${urls.car}/${id}`,car),
        deleteById:(id) => axiosServices.delete(`${urls.car}/${id}`)
}