import React from 'react';
import EducationList from '../EducationList/EducationList';
import * as gs from '../../_globalStyles/globalStyles.module.css';
import { Link } from 'react-router-dom';

const EducationLayout = () => {
    return (
        <div >
            <div className={gs.defaultContainer}>
                <br /> <br /> <br />
                <h1>Education</h1>
                <hr />
                <p className={gs.p}>Click on the button below and add information about your education. <br />
                Once you finish you can move on to
                <Link to='/cv-list' className="nav-link" >CV</Link>
                </p>

            </div>

            <EducationList />
        </div>
    )
}


export default EducationLayout;