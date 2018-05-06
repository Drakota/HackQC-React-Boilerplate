const initialState = {
    directions: null,
}

export const directionsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GENERATE_DIRECTIONS":
            return {...state, directions: action.payload}
        case "CLEAR_DIRECTIONS":
            return {...state, directions: null}
        default:
            return state;
    }
}