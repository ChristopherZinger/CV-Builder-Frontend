import * as actionTypes from '../actions/actionTypes';


const initialState = {
    isLoading: false,
    experienceList: [],
    errors: {}
};

const experienceStart = (state, action) => {
    return ({
        ...state,
        isLoading: true,
    })
}

const experienceSuccess = (state, action) => {
    return ({
        ...state,
        isLoading: false,
        experienceList: action.data,
        errors: {}
    })
}

const experienceFail = (state, action) => {
    return ({
        ...state,
        isLoading: false,
        errors: action.errors
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EXPERIENCE_START: return experienceStart(state, action);
        case actionTypes.EXPERIENCE_SUCCESS: return experienceSuccess(state, action);
        case actionTypes.EXPERIENCE_FAIL: return experienceFail(state, action);

        default:
            return state;
    }
};

export default reducer;