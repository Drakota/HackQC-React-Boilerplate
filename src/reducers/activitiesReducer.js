const initialState = {
    activities: null,
    current_activity: null,
    modalVisibility: false,
    activityAddress: ''
}

export const activitiesReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_ACTIVITIES_SUCCESS":
            return {...state, activities: action.payload}
        case "CHANGE_CURRENT_ACTIVITY":
            return {...state, current_activity: action.payload}
        case "CLEAR_ACTIVITIES":
            return {...state, activities: null, current_activity: null}
        case "TOGGLE_MODAL_FEEDBACK":
            return {...state, modalVisibility: action.payload}
        default:
            return state;
    }
}