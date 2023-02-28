import axios from 'axios'

const instace = axios.create({
    baseURL:'https://graphqlzero.almansi.me/api',

})

export default instace