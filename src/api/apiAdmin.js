import axios from "../configs/axios"

export default {
    // autentikasi
    login: (payload) => axios.post('/v1/admin/auth/login', payload).then((response) => response),
}