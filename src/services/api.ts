import axios from 'axios'; // biblioteca para requisições http
// entendimento de JSON
// base URL com parte em comum das urls requisitadas

export const api = axios.create({
    baseURL: 'http://localhost:3333'
})