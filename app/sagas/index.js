import { put, take, takeEvery, all, call } from 'redux-saga/effects';
import News from '../apis/News';
import Sources from '../apis/Sources';

export function* fetchSources () {
    try {
        yield put({ type: 'FETCHING_SOURCES' });
        const SourcesAPI = new Sources();
        const res = yield call(SourcesAPI.fetch);

        yield put({ type: 'FETCHED_SOURCES', payload: res.data });
    } catch (e) {
        yield put({ type: 'FETCH_SOURCES_FAILED' });
    }
}

export function* fetchNews (action) {
    try {
        const { payload } = action;

        yield put({ type: 'FETCHING_NEWS', payload });
        const NewsAPI = new News();
        const res = yield call(NewsAPI.fetch, payload.source);

        yield put({ type: 'FETCHED_NEWS', payload: res.data });
    } catch (e) {
        yield put({ type: 'FETCH_NEWS_FAILED' });
    }
}

export function* watchNewsFetchAsync () {
    yield take('FETCH_SOURCES_ASYNC');
    yield call(fetchSources);

    yield takeEvery('FETCH_NEWS_ASYNC', fetchNews);
}

export default function* rootSaga() {
    yield all([
        watchNewsFetchAsync(),
    ]);
}
