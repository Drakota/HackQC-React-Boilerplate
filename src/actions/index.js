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

export function signupUser(values) {
    return async (dispatch) => {
        var params = new URLSearchParams();
        params.append('firstName', values.first_name);
        params.append('lastName', values.last_name);
        params.append('email', values.email);
        params.append('password', values.password);
        axios.post('/users', params)
            .then((data) => {
                message.success('You are signed up and logged in!');
                dispatch(signupUserSuccess(data));
            })
            .catch((error) => {
                if(error.response.data.errors.email) {
                    message.error('The email you entered is already in use!');
                }
                else {
                    message.error('Oopsie daisy');
                }
            });

    }
}


