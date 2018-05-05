import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { layoutReducer } from './layoutReducer';
import { directionsReducer } from './directionsReducer';

export default combineReducers({
    userReducer,
    layoutReducer,
    directionsReducer
});