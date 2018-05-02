import axios from 'axios';
import { history } from '../index';

export const loginUserSuccess = (user) => ({
    type: 'LOGIN_USER_SUCCESS',
    payload: user
});

export function loginUser(username, password) {
    return async (dispatch) => {
        var data = await axios('https://randomuser.me/api');
        dispatch(loginUserSuccess(data.data.results[0]));
        setTimeout(() => {
            history.push('/');
        }, 1000);
    }
}

