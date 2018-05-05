import axios from 'axios';
import { history } from '../index';

export const loginUserSuccess = (user) => ({
    type: 'LOGIN_USER_SUCCESS',
    payload: user
});

export const signupUserSuccess = (user) => ({
    type: 'SIGNUP_USER_SUCCESS',
    payload: user
});

export function loginUser(username, password) {
    return async (dispatch) => {
        var data = await axios('https://randomuser.me/api');
        dispatch(loginUserSuccess(data.data.results[0]));
    }
}

export function signupUser(values) {
    return async (dispatch) => {
        var params = new URLSearchParams();
        params.append('firstName', values.first_name);
        params.append('lastName', values.last_name);
        params.append('email', values.email);
        params.append('password', values.password);
        var data = await axios.post('/users', params);
        if(!data.errors) {
            dispatch(signupUserSuccess);
        }
    }
}


