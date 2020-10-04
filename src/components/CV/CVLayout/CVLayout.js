import React from 'react';
import * as gs from '../../_globalStyles/globalStyles.module.css';
import CVDisplay from '../CVDisplay/CVDisplay';


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


            <CVDisplay />

        </div>
    )
}


export default CVLayout;