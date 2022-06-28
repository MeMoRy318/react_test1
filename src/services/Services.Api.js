import axios from "axios";

const axiosJson = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/users'
});
const getUsers = () => axiosJson.get('');
const getPosts = (id) => axiosJson.get(`/${id}/posts`);

export {getPosts,getUsers}

