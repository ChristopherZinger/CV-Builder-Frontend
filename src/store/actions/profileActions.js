import axios from 'axios';
import * as actionTypes from './actionTypes';

export const profileStart = () => {
    return {
        type: actionTypes.PROFILE_START
    };
};

export const profileFail = (err) => {
    return {
        type: actionTypes.PROFILE_FAIL,
        errors: {}
    };
};

export const profileSuccess = (data) => {
    return {
        type: actionTypes.PROFILE_SUCCESS,
        data
    };
};

export const profileReset = () => {
    return {
        type: actionTypes.PROFILE_RESET,
    };
};


export const saveProfile = (data) => {
    return dispatch => {
        dispatch(profileStart());
        axios.post('save-profile/', data)
            .then(res => {
                dispatch(profileSuccess(res.data));
            })
            .catch(err => {
                dispatch(profileFail(err))
            });

    };
};

export const getProfile = () => {
    return dispatch => {
        dispatch(profileStart());
        axios.get('get-profile/')
            .then(res => {
                dispatch(profileSuccess(res.data));
            })
            .catch(err => {
                dispatch(profileFail(err))
            });
    }
};

export const removeContact = (id) => {
    return dispatch => {
        dispatch(profileStart());
        const url = 'remove-contact/?id=' + id;
        axios.get(url)
            .then(res => {
                dispatch(profileSuccess(res.data));
            })
            .catch(err => {
                dispatch(profileFail(err))
            });
    }
};