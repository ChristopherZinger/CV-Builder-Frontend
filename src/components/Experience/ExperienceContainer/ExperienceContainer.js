import React, { useState } from 'react';
import ExperienceForm from '../ExperienceForm/ExperienceForm';
import globalStyles from '../../_globalStyles/globalStyles.module.css';

const ExperienceContainer = props => {
    const [dispState, setDispState] = useState(false);

    const display = dispState
        ? <ExperienceForm data={props.data} />
        : <ExperienceCard data={props.data} />

    return (
        <div className={globalStyles.myContainer} >

            {/* Content */}
            {display}

            {/* Update button */}
            { !dispState ?
                <button onClick={() => setDispState(!dispState)} >update</button>
                : null}

        </div>
    )
}

const ExperienceCard = props => {

    return (
        <div>
            <h4>{props.data.company}</h4>
            <h3>{props.data.position}</h3>
            <span>{props.data.startDate}</span>
            <span>{props.data.endDate}</span>
        </div>
    )
}

export default ExperienceContainer;