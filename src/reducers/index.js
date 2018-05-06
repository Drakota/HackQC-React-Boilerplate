import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { layoutReducer } from './layoutReducer';
import { directionsReducer } from './directionsReducer';
import { activitiesReducer } from './activitiesReducer';

export default combineReducers({
    userReducer,
    layoutReducer,
    directionsReducer,
    activitiesReducer,
});