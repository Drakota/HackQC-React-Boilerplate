const initialState = {
    toggle_sidebar: false,
    toggle_drawer: false,
    locationReviewed: false,
}

export const layoutReducer = (state = initialState, action) => {
    switch(action.type) {
        case "TOGGLE_SIDEBAR":
            return {...state, toggle_sidebar: action.payload}
        case "TOGGLE_DRAWER":
            return {...state, toggle_drawer: action.payload}
        case "TOGGLE_REVIEW":
            return {...state, locationReviewed: action.payload}
        default:
            return state;
    }
}