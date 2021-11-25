import {combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import MovieReducer from './MovieReducer';

export default combineReducers({
    auth: AuthReducer,
    profile: ProfileReducer,
    movie: MovieReducer
});