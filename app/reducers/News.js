export default function news(state = {
    loading: false,
    articles: [],
}, action) {
    switch (action.type) {
        case 'FETCHED_NEWS':
            return {
                ...state,
                articles: action.data.articles,
            };
        default:
            return state;
    }
}
