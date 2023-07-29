import axios from "axios"


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '2f3aa466a472474f8f47a4b656bcd714'
    }
})
