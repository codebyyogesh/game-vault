import axios from "axios"


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '325fd7ffdd30411a9be6bb7bdba20fc7'
    }
})
