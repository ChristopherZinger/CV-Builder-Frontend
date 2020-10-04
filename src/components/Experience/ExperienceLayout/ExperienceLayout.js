import React from 'react';
import ExperienceList from '../ExperienceList/ExperienceList';
import * as gs from '../../_globalStyles/globalStyles.module.css';


const ExperienceLayout = () => {
    return (
        <div >
            <div className={gs.defaultContainer}>
                <br /> <br /> <br />
                <h1>Experience</h1>
                <hr />
                <p>Click on the button below and add information about your professional experince</p>
            </div>

            <ExperienceList />
        </div>
    )
}


export default ExperienceLayout;