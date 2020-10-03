import axios from 'axios';
import * as actionTypes from './actionTypes';

export const experienceStart = () => {
    return {
        type: actionTypes.EXPERIENCE_START
    };
};

export const experienceFail = (err) => {
    return {
        type: actionTypes.EXPERIENCE_FAIL,
        errors: err.response.data.errors
    };
};

export const experienceSuccess = (data) => {
    return {
        type: actionTypes.EXPERIENCE_SUCCESS,
        data
    };
};


export const saveExperience = (data) => {
    return dispatch => {
        dispatch(experienceStart());
        // console.log(
        //     '[saveExperience.js] header token: ', axios.defaults.headers.common['authorization']
        // )
        axios.post('save-experience/', data)
            .then(res => {
                // res.date should be a list of positions
                console.log('[ExperienceActions.js] positions: ', res.data)
                dispatch(experienceSuccess(res.data));
            })
            .catch(err => {
                dispatch(experienceFail(err))
            });
    };
};

export const getExperience = () => {
    return dispatch => {
        dispatch(experienceStart());
        axios.get('get-experience/')
            .then(res => {
                // res.date should be a list of positions
                dispatch(experienceSuccess(res.data));
            })
            .catch(err => {
                dispatch(experienceFail(err))
            });
    };
};



export const removeExperience = (id) => {
    return dispatch => {
        dispatch(experienceStart());
        const url = 'remove-experience/?expID=' + id;
        axios.get(url)
            .then(res => {
                dispatch(experienceSuccess(res.data));
            })
            .catch(err => {
                dispatch(experienceFail(err))
            });
    };
};