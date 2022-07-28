import {axiosServices} from "./axios.services";
import {urls} from "../constans";

const _accessTokenKey = "access"
const _refreshTokenKey = "refresh"

const authServices = {
    login:(user) =>axiosServices.post(urls.users,user),
    register:(user) =>axiosServices.post(urls.users,user),

    setTokens:({access,refresh})=>{
        localStorage.setItem(_accessTokenKey,access)
        localStorage.setItem(_refreshTokenKey,refresh)
    },

    deleteToken:({access,refresh})=>{
        localStorage.removeItem(_accessTokenKey)
        localStorage.removeItem(_refreshTokenKey)
    },
    getAccessTokenKey:()=>localStorage.getItem(_accessTokenKey),
    getRefreshTokenKey:()=>localStorage.getItem(_refreshTokenKey)
}

export {authServices}