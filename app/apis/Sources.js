import Api from './Api';

export default class Sources extends Api {
    constructor() {
        super();

        this.fetch = this.fetch.bind(this);
    }

    fetch () {
        return this.axios.get('sources');
    }
}
