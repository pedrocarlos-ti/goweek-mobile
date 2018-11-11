import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api-goweek.mybluemix.net'
});

export default api;