import axios from 'axios';
import * as actionTypes from './actionTypes';

export const educationStart = () => {
    return {
        type: actionTypes.EDUCATION_START
    };
};

export const educationFail = (err) => {
    return {
        type: actionTypes.EDUCATION_FAIL,
        errors: {}
    };
};

export const educationSuccess = (data) => {
    return {
        type: actionTypes.EDUCATION_SUCCESS,
        data
    };
};


export const saveEducation = (data) => {
    return dispatch => {
        dispatch(educationStart());

        axios.post('save-education/', data)
            .then(res => {
                // res.date should be a list of education
                console.log('[EducationActions.js] positions: ', res.data)
                dispatch(educationSuccess(res.data));
            })
            .catch(err => {
                dispatch(educationFail(err))
            });
    };
};

export const getEducation = () => {
    return dispatch => {
        dispatch(educationStart());
        axios.get('get-education/')
            .then(res => {
                // res.date should be a list of positions
                dispatch(educationSuccess(res.data));
            })
            .catch(err => {
                dispatch(educationFail(err))
            });
    };
};



export const removeEducation = (id) => {
    return dispatch => {
        dispatch(educationStart());
        const url = 'remove-education/?eduID=' + id;
        axios.get(url)
            .then(res => {
                dispatch(educationSuccess(res.data));
            })
            .catch(err => {
                dispatch(educationFail(err))
            });
    };
};