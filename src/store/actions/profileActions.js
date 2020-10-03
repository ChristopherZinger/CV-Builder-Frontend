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


export const saveProfile = (data) => {
    return dispatch => {
        dispatch(profileStart());
        console.log(
            '[profileActions.js] header token: ', axios.defaults.headers.common['authorization']
        )
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
        console.log(
            '[profileActions.js] header token: ', axios.defaults.headers.common['authorization']
        )
        axios.get('get-profile/')
            .then(res => {
                dispatch(profileSuccess(res.data));
            })
            .catch(err => {
                dispatch(profileFail(err))
            });
    }
};