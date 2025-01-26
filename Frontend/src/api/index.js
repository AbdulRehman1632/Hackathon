import axios from "axios"

const apiClient = axios.create({
    baseURL:'http://localhost:2002',
    timeout : 6000,
    headers:{
        "Content-Type":"application/json"
    }
})


export default apiClient;