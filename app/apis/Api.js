import axios from 'axios';

export default class Api {
    constructor () {
        this.axios = axios.create({
            baseURL: 'https://newsapi.org/v1/',
            headers: {
                'X-Api-Key': '248b88743a834167a3a9010e0c68d5d2',
            },
        });
    }
}
