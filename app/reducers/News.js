export default function news(state = {
    loading: false,
    news: [],
}, action) {
    switch (action.type) {
        case 'FETCHED_NEWS':
            return {
                ...state,
                news: action.data.articles,
            };
        default:
            return state;
    }
}
