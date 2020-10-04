import React from 'react';
import ExperienceList from '../ExperienceList/ExperienceList';
import globalStyles from '../../_globalStyles/globalStyles.module.css';


const ExperienceLayout = () => {
    return (
        <div >
            <div>
                <h1>Experience:</h1>
            </div>

            <ExperienceList />
        </div>
    )
}


export default ExperienceLayout;