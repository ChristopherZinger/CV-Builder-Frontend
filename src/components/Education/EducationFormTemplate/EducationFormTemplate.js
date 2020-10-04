import React from 'react';
import EducationForm from '../EducationForm/EducationForm';
import * as gs from '../../_globalStyles/globalStyles.module.css';


const EducationFormTemplate = props => {
    return (
        <div className={gs.myContainer} >
            <EducationForm data={{}} clearOnSave={props.clearOnSave}>
                <button onClick={props.clickCancel} className={[gs.btn, gs.btnDisabled].join(' ')} > cancel </button>
            </EducationForm>
        </div>
    )
}

export default EducationFormTemplate;