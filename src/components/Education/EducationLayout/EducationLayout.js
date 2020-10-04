import React from 'react';
import EducationList from '../EducationList/EducationList';
import * as gs from '../../_globalStyles/globalStyles.module.css';


const EducationLayout = () => {
    return (
        <div >
            <div className={gs.defaultContainer}>
                <br /> <br /> <br />
                <h1>Education</h1>
                <hr />
                <p>Click on the button below and add information about your education</p>
            </div>

            <EducationList />
        </div>
    )
}


export default EducationLayout;