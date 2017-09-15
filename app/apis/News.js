import Api from './Api';

export default class News extends Api {
    constructor() {
        super();

        this.fetch = this.fetch.bind(this);
    }

    fetch () {
        return this.axios.get('articles?source=reddit-r-all&sortBy=top');
    }
}
