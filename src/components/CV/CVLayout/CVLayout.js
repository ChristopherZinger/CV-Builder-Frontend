import React from 'react';
// import EducationList from '../EducationList/EducationList';
import * as gs from '../../_globalStyles/globalStyles.module.css';


const CVLayout = () => {
    return (
        <div >
            <div className={gs.defaultContainer}>
                <br /> <br /> <br />
                <h1>CV</h1>
                <hr />
                <p>Click on the button below. Create new CV
                     and decide which informations should be displayed</p>
            </div>

            {/* <EducationList /> */}
        </div>
    )
}


export default CVLayout;