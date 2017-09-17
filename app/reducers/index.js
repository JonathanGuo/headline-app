import { combineReducers } from 'redux';
import { routerReducer as Router } from 'react-router-redux';
import News from './News';
import Sources from './Sources';

export default combineReducers({
    Router,
    News,
    Sources,
});
