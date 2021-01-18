import axios from 'axios'

const API = axios.create({
    baseURL: 'https://capstone-serverr.herokuapp.com'
})

export default API
