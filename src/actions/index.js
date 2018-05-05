import axios from 'axios';
import { history } from '../index';
import { message } from 'antd';

export const loginUserSuccess = (user) => ({
    type: 'LOGIN_USER_SUCCESS',
    payload: user
});

export const loginUserFailure = (bool) => ({
    type: 'LOGIN_USER_FAILURE',
    payload: bool
});

export const loginUserPending = (bool) => ({
    type: 'LOGIN_USER_PENDING',
    payload: bool
});

export const signupUserSuccess = (user) => ({
    type: 'SIGNUP_USER_SUCCESS',
    payload: user
});

export const toggleDrawer = (bool) => ({
    type: 'TOGGLE_DRAWER',
    payload: bool
});

export function loginUser(email, password) {
    return async (dispatch) => {
        dispatch(loginUserPending(true));
        var params = new URLSearchParams();
        params.append('email', email);
        params.append('password', password);
        try {
            var payload = await axios.post('/users/login', params);
            message.success('You are logged in!');
            dispatch(loginUserSuccess(payload.data));
        } catch (error) {
            dispatch(loginUserPending(false));
            dispatch(loginUserFailure(true));
        }
    }
}

export function signupUser(user_info) {
    return async (dispatch) => {
        var data = await axios.post('https://reqres.in/api/users', {
            name: user_info.email,
            job: user_info.password
        });
        if (data.data) {
            console.log('user created success',  data.data);
            dispatch(signupUserSuccess(data.data));
        } 
    }
}


