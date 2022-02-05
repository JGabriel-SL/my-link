import axios from 'axios';

export const key = "2f69d36e16342808fea1dae395b0619441533b31"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;