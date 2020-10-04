import axios from 'axios';
import * as actionTypes from './actionTypes';

export const cvStart = () => {
    return {
        type: actionTypes.CV_START
    };
};

export const cvFail = (err) => {
    return {
        type: actionTypes.CV_FAIL,
        errors: {}
    };
};

export const cvSuccess = (data) => {
    return {
        type: actionTypes.CV_SUCCESS,
        data
    };
};


// export const saveCV = (data) => {
//     return dispatch => {
//         dispatch(cvStart());

//         axios.post('save-cv/', data)
//             .then(res => {
//                 // res.date should be a list of cv
//                 console.log('[CVActions.js] positions: ', res.data)
//                 dispatch(cvSuccess(res.data));
//             })
//             .catch(err => {
//                 dispatch(cvFail(err))
//             });
//     };
// };

export const getCV = () => {
    return dispatch => {
        dispatch(cvStart());
        axios.get('get-cv-list/')
            .then(res => {
                // res.date should be a list of positions
                dispatch(cvSuccess(res.data));
            })
            .catch(err => {
                dispatch(cvFail(err))
            });
    };
};



// export const removeCV = (id) => {
//     return dispatch => {
//         dispatch(cvStart());
//         const url = 'remove-cv/?eduID=' + id;
//         axios.get(url)
//             .then(res => {
//                 dispatch(cvSuccess(res.data));
//             })
//             .catch(err => {
//                 dispatch(cvFail(err))
//             });
//     };
// };