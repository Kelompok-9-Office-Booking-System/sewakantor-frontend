import axios from "../configs/axios"

export default {
    // autentikasi
    login: (payload) => axios.post('/v1/customer/auth/login', payload).then((response) => response),
    register: (payload) => axios.post('/v1/customer/auth/register', payload).then((response) => response),
    
}