import * as actionTypes from '../actions/actionTypes';


const initialState = {
    isLoading: false,
    email: null,
    isAuthenticated: false,
    accessToken: null,
    errors: {}
};


const authStart = (state, action) => {
    return ({
        ...state,
        isLoading: true
    })
}

const authSuccess = (state, action) => {
    return ({
        ...state,
        isLoading: false,
        email: action.email,
        isAuthenticated: true,
        errors: {}
    })
}

const authFail = (state, action) => {
    return ({
        ...state,
        isLoading: false,
        errors: action.errors
    })
}

const authLogoutStart = (state, action) => {
    return ({
        ...state,
        isLoading: true,
    })
}

const authLogoutFail = (state, action) => {
    return ({
        ...state,
        isLoading: false,
        errors: action.errors
    })
}

const authLogoutSuccess = (state, action) => {
    return ({
        ...state,
        isLoading: false,
        email: null,
        isAuthenticated: false,
        errors: {}
    })
}

const authGetTokenStart = (state, action) => {
    return ({
        ...state,
        isLoading: true,
    })
}
const authGetTokenSuccess = (state, action) => {
    return ({
        ...state,
        isLoading: false,
        isAuthenticated: true,
        accessToken: action.accessToken,
        errors: {}
    })
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);

        case actionTypes.AUTH_LOGOUT_START: return authLogoutStart(state, action);
        case actionTypes.AUTH_LOGOUT_FAIL: return authLogoutFail(state, action);
        case actionTypes.AUTH_LOGOUT_SUCCESS: return authLogoutSuccess(state, action);

        case actionTypes.AUTH_GET_TOKEN_START: return authGetTokenStart(state, action);
        case actionTypes.AUTH_GET_TOKEN_SUCCESS: return authGetTokenSuccess(state, action);

        default:
            return state;
    }
};

export default reducer;