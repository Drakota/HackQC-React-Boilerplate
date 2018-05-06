const initialState = {
    user: null,
    login_pending: false,
    login_failed: false
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOGIN_USER_SUCCESS":
            return {...state, user: action.payload}
        case "LOGIN_USER_PENDING":
            return {...state, login_pending: action.payload}
        case "LOGIN_USER_FAILURE":
            return {...state, login_failed: action.payload}
        case "SIGNUP_USER_SUCCESS":
            return {...state, user: action.payload}
        case "LOGOUT_USER_SUCCESS":
            return {...state, user: action.payload, login_pending: false}
        default:
            return state;
    }
}