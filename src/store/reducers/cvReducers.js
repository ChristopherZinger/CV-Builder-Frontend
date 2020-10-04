import * as actionTypes from '../actions/actionTypes';


const initialState = {
    isLoading: false,
    cvList: [],
    errors: {}
};

const cvStart = (state, action) => {
    return ({
        ...state,
        isLoading: true,
    })
}

const cvSuccess = (state, action) => {
    console.log('[cvReducers] cussecc: ', action)
    return ({
        ...state,
        isLoading: false,
        cvList: action.data,
        errors: {}
    })
}

const cvFail = (state, action) => {
    return ({
        ...state,
        isLoading: false,
        errors: action.errors
    })
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CV_START: return cvStart(state, action);
        case actionTypes.CV_SUCCESS: return cvSuccess(state, action);
        case actionTypes.CV_FAIL: return cvFail(state, action);

        default:
            return state;
    }
};

export default reducer;