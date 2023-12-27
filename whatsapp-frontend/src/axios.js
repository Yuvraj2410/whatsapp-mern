import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://whatsapp-mern-api-ten.vercel.app/'
})

export default instance;