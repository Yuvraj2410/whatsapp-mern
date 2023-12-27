import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://whatsapp-mern-api-ten.vercel.app/'
    // baseURL: "http://localhost:9000"
})

export default instance;