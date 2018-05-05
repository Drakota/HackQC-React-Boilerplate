import axios from 'axios';
import { history } from '../index';
import { message } from 'antd';
import { store } from '../index';

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

export const logoutUserSuccess = () => ({
    type: 'LOGOUT_USER_SUCCESS',
    payload: ''
});

export const toggleDrawer = (bool) => ({
    type: 'TOGGLE_DRAWER',
    payload: bool
});

export const toggleSidebar = (bool) => ({
    type: 'TOGGLE_SIDEBAR',
    payload: bool
});

export const genDirections = (directions) => ({
    type: 'GENERATE_DIRECTIONS',
    payload: directions
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

export function logoutUser(token) {
    return async (dispatch) => {
        const instance = axios.create({
            baseURL: '/',
            timeout: 1000,
            headers: {'Authorization': 'Bearer ' + token}
        });

        instance.delete('/users/logout')
          .then((data) => {
            message.success('You have been logged out!')
            dispatch(logoutUserSuccess());
          })
          .catch(() => {
            message.success('A bug has occured while trying to log you out. Please try again later!');
          });
    }
}

export function generateDirections(google, coords) {
    return async (dispatch) => {
        const instance = axios.create({
            baseURL: '/',
            headers: {'Authorization': `Bearer ${store.getState().userReducer.user.token}`}
        });
        var params = new URLSearchParams();
        params.append('lat', coords.latitude);
        params.append('lng', coords.longitude);
        params.append('range', 5000);
        const payload = await instance.post('/map/gencoords', params);
        
        const DirectionsService = new google.maps.DirectionsService();
        DirectionsService.route({
        origin: new google.maps.LatLng(coords.latitude, coords.longitude),
        destination: new google.maps.LatLng(payload.data.data[4].coords[1], payload.data.data[4].coords[0]),
        waypoints: [
                {
                    location: new google.maps.LatLng(payload.data.data[0].coords[1], payload.data.data[0].coords[0])
                },
                {
                    location: new google.maps.LatLng(payload.data.data[1].coords[1], payload.data.data[1].coords[0])
                },
                {
                    location: new google.maps.LatLng(payload.data.data[2].coords[1], payload.data.data[2].coords[0])
                },
                {
                    location: new google.maps.LatLng(payload.data.data[3].coords[1], payload.data.data[3].coords[0])
                }
        ],
        travelMode: google.maps.TravelMode.WALKING,
        optimizeWaypoints: true,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                dispatch(genDirections(result));
            } else {
                console.error(`error fetching directions ${result}`);
            }
        });
    }
}


