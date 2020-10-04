import React from 'react';
// import EducationList from '../EducationList/EducationList';
import * as gs from '../../_globalStyles/globalStyles.module.css';
import CVDisplay from '../CVDisplay/CVDisplay';
import CVList from '../CVList/CVList';

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

            <div className="row">
                <div className="col-3">
                    <CVList />
                </div>
                <div className="col-9">
                    <CVDisplay />
                </div>
            </div>
        </div>
    )
}


export default CVLayout;