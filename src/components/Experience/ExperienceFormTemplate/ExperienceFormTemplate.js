import React from 'react';
import ExperienceForm from '../ExperienceForm/ExperienceForm';
import * as gs from '../../_globalStyles/globalStyles.module.css';


const ExperienceFormTemplate = props => {

    return (
        <div className={gs.myContainer} >
            <ExperienceForm data={{}} clearOnSave={props.clearOnSave}>
                <button onClick={props.clickCancel} className={[gs.btn, gs.btnDisabled].join(' ')} > cancel </button>
            </ExperienceForm>
        </div>
    )
}

export default ExperienceFormTemplate;