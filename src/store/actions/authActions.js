import axios from 'axios';
import * as actionTypes from './actionTypes';
import { profileReset } from './profileActions'

// GLOBAL TIMER - for refresh token timeout
let TIMER;

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authFail = (err) => {
    return {
        type: actionTypes.AUTH_FAIL,
        errors: err.response.data.errors
    };
};

export const authSuccess = (email) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        email,
    };
};

export const updateAccessTokenTimeout = (expirationPeriod) => {
    return dispatch => {
        TIMER = setTimeout(() => {
            dispatch(updateToken());
        }, ((expirationPeriod) * 60 * 1000)); // get new token 1 min before old expires
    };
};

export const logoutStart = () => {
    return { type: actionTypes.AUTH_LOGOUT_START };
};

export const logoutSuccess = () => {
    return { type: actionTypes.AUTH_LOGOUT_SUCCESS };
}

export const logoutFail = () => {
    return { type: actionTypes.AUTH_LOGOUT_FAIL };
};

export const logout = () => {
    return dispatch => {
        dispatch(logoutStart());
        axios.get('/logout')
            .then(res => {
                axios.defaults.headers.common['authorization'] = `AUTH TOKEN`;
                clearTimeout(TIMER);
                dispatch(logoutSuccess());
            })
            .catch(err => {
                dispatch(logoutSuccess());
            })
    }
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const data = {
            email,
            password
        };
        const url = isSignup ? '/signup' : '/login';
        axios.post(url, data)
            .then(res => {
                const { accessToken, expirationPeriod, email } = res.data;
                // set headers
                axios.defaults.headers.common['authorization'] = `AUTH ${accessToken}`;
                // dispath success and set get new token timeout
                dispatch(authSuccess(email));
                dispatch(profileReset())
                dispatch(updateAccessTokenTimeout(expirationPeriod));

            })
            .catch(err => {
                dispatch(authFail(err))
            });

    };
};


export const updateTokenStart = () => {
    return { type: actionTypes.AUTH_GET_TOKEN_START };
};

export const updateTokenSuccess = (accessToken) => {
    return {
        type: actionTypes.AUTH_GET_TOKEN_SUCCESS,
        accessToken,
    };
}


export const updateToken = () => {
    return dispatch => {
        // updateTokenStart;
        dispatch(updateTokenStart());
        // clear old timer when user refresh the page
        clearTimeout(TIMER);
        // axios post 
        axios.get('/get-new-access-token')
            .then(res => {
                const { accessToken, expirationPeriod } = res.data;
                axios.defaults.headers.common['authorization'] = `AUTH ${accessToken}`;
                dispatch(updateTokenSuccess(accessToken));
                dispatch(updateAccessTokenTimeout(expirationPeriod));
            })
            .catch(err => {
                dispatch(logout());
            })
    }
}