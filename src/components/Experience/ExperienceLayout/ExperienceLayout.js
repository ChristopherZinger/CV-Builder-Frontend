import React from 'react';
import ExperienceList from '../ExperienceList/ExperienceList';
import * as gs from '../../_globalStyles/globalStyles.module.css';
import { Link } from 'react-router-dom';

const ExperienceLayout = () => {
    return (
        <div >
            <div className={gs.defaultContainer}>
                <br /> <br /> <br />
                <h1>Experience</h1>
                <hr />
                <p className={gs.p}>Click on the button below and add information about your professional experience. <br />
                Once you finish you can move on to
                <Link to='/education' className="nav-link" >Education</Link>.
                </p>
            </div>

            <ExperienceList />
        </div>
    )
}


export default ExperienceLayout;