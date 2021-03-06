export default function News(state = {
    loading: false,
    source: null,
    articles: [],
    failed: false,
}, action) {
    switch (action.type) {
        case 'FETCHED_NEWS':
            return {
                ...state,
                loading: false,
                failed: false,
                articles: action.payload.articles,
            };
        case 'FETCHING_NEWS':
            return {
                ...state,
                source: action.payload.source,
                loading: true,
                failed: false,
            };
        case 'FETCH_NEWS_FAILED':
            return {
                ...state,
                loading: false,
                loaded: false,
                failed: true,
            };
        default:
            return state;
    }
}
