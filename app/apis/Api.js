import axios from 'axios';

export default class Api {
    constructor () {
        this.axios = axios.create({
            baseURL: 'https://newsapi.org/v1/',
            headers: {
                'X-Api-Key': API_KEY,
            },
        });
    }
}
