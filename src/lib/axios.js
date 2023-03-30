import Axios from 'axios'

const axios = Axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
})

export default axios
