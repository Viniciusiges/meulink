import axios from "axios";

export const key = "7e65d03e7ed358701e68a2a436287f273693ed88"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;