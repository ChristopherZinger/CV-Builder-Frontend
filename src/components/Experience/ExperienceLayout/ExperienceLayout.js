import React from 'react';
import ExperienceList from '../ExperienceList/ExperienceList';

const ExperienceLayout = () => {
    return (
        <ExperienceList />
    )
}



// const mapStateToProps = state => {
//     return {
//         positions: state.experienceReducers.positions,
//         isLoading: state.experienceReducers.isLoading,
//     }
// }


// const mapDispatchToProps = dispatch => {
//     return {
//         getExperience: () => dispatch(actions.getExperience()),
//         removeExperience: (id) => dispatch(actions.removeExperience(id)),
//     }
// }
// connect(mapStateToProps, mapDispatchToProps)(ExperienceList)

export default ExperienceLayout;