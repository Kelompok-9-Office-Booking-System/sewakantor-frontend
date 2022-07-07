import axios from "axios"

import errorHandler from "./errorHandler"

const instance = axios.create({
    // baseURL: `${process.env.BASE_URL}`,
    baseURL: "http://54.211.120.43/api",
    withCredentials: false,
    headers : {
        'Access-Control-Allow-Origin' : '*',
        'Content-Type'  : 'application/json'
    }
});

instance.interceptors.response.use((response) => response.data, errorHandler)

export {default as SetAuthorHeader} from "./setAuthorHeader"

export default instance