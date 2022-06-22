import axios from "axios"

const http = axios.create({
    baseURL: 'https://coursesnodejs.herokuapp.com'
})

export default http