import * as actionTypes from '../actions/actionTypes';


const initialState = {
    isLoading: false,
    educationList: [],
    errors: {}
};

const educationStart = (state, action) => {
    return ({
        ...state,
        isLoading: true,
    })
}

const educationSuccess = (state, action) => {
    return ({
        ...state,
        isLoading: false,
        educationList: action.data,
        errors: {}
    })
}

const educationFail = (state, action) => {
    return ({
        ...state,
        isLoading: false,
        errors: action.errors
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EDUCATION_START: return educationStart(state, action);
        case actionTypes.EDUCATION_SUCCESS: return educationSuccess(state, action);
        case actionTypes.EDUCATION_FAIL: return educationFail(state, action);

        default:
            return state;
    }
};

export default reducer;