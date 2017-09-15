import { combineReducers } from 'redux';
import { routerReducer as Router } from 'react-router-redux';
import News from './News';

export default combineReducers({
    Router,
    News,
});
