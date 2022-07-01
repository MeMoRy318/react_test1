import axios from "axios";

const axiosCreateUser = axios.create({baseURL:"https://jsonplaceholder.typicode.com/users"})
const axiosPostUser = (data) => axiosCreateUser.post("",data)
export {axiosPostUser}