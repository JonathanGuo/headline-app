export default function Sources(state = {
    loading: false,
    loaded: false,
    failed: false,
    sources: [],
}, action) {
    switch (action.type) {
        case 'FETCHING_SOURCES':
            return {
                ...state,
                loaded: false,
                loading: true,
                failed: false,
            };
        case 'FETCHED_SOURCES':
            return {
                ...state,
                loaded: true,
                loading: false,
                failed: false,
                sources: action.payload.sources,
            };
        case 'FETCH_SOURCES_FAILED':
            return {
                ...state,
                loaded: false,
                loading: false,
                failed: true,
            };
        default:
            return state;
    }
}
