import { put, takeEvery, all, call } from 'redux-saga/effects';
import News from '../apis/News';

export function* fetchNews () {
    const NewsAPI = new News();
    const res = yield call(NewsAPI.fetch);

    if (res.status === 200) {
        yield put({ type: 'FETCHED_NEWS', data: res.data });
    } else {
        yield put({ type: 'FETCH_NEWS_FAILED' });
    }
}

export function* watchNewsFetchAsync () {
    yield takeEvery('FETCH_NEWS_ASYNC', fetchNews);
}

export default function* rootSaga() {
    yield all([
        watchNewsFetchAsync(),
    ]);
}
