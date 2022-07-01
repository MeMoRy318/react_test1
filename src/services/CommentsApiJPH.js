import axios from "axios";

const axiosComments = axios.create({baseURL:"http://jsonplaceholder.typicode.com/comments"});

const createCommentsJPH = (data) => axiosComments.post("",data);

export {createCommentsJPH}