import Api from './Api';

export default class News extends Api {
    constructor() {
        super();

        this.fetch = this.fetch.bind(this);
    }

    fetch (source) {
        const [sortBy] = source.sortBysAvailable;

        return this.axios.get('articles', {
            params: {
                source: source.id,
                sortBy,
            },
        });
    }
}
