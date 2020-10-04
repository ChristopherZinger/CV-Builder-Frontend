import * as actionTypes from '../actions/actionTypes';


const initialState = {
    isLoading: false,
    info: {},
    contact: {},
    address: {},
    errors: {}
};

const profileStart = (state, action) => {
    return ({
        ...state,
        isLoading: true,
    })
}

const profileSuccess = (state, action) => {
    const { info, contact, address } = action.data;
    return ({
        ...state,
        isLoading: false,
        info: info,
        contact: contact,
        address: address,
        errors: {}
    })
}

const profileFail = (state, action) => {
    return ({
        ...state,
        isLoading: false,
        errors: action.errors
    })
}


const profileReset = (state, action) => {
    return ({
        isLoading: false,
        info: {},
        contact: {},
        address: {},
        errors: {}
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PROFILE_START: return profileStart(state, action);
        case actionTypes.PROFILE_SUCCESS: return profileSuccess(state, action);
        case actionTypes.PROFILE_FAIL: return profileFail(state, action);
        case actionTypes.PROFILE_RESET: return profileReset(state, action);

        default:
            return state;
    }
};

export default reducer;