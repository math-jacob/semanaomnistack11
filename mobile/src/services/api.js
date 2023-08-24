import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.15.168:3333' // utilizar o [IP da sua maquina]:[porta utilizada no backend]
})

export default api