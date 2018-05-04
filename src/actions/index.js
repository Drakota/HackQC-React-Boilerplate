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


