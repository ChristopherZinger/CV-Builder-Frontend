import React, { useState } from 'react';
import ExperienceForm from '../ExperienceForm/ExperienceForm';
import * as gs from '../../_globalStyles/globalStyles.module.css';
import moment from 'moment';


const ExperienceContainer = props => {
    const [dispState, setDispState] = useState(false);

    const display = dispState
        ? <ExperienceForm data={props.data} />
        : <ExperienceCard data={props.data} />

    const updateBtn = (
        <div className="row"> <div className="col">
            <button className={[gs.btn, gs.btnDisabled].join(' ')} onClick={() => setDispState(!dispState)} >update</button>
        </div></div>
    )

    return (
        <div className={gs.myContainer} >

            {/* Content */}
            {display}

            {/* Update button */}
            { !dispState ? updateBtn : null}

        </div>
    )
}

const fromatDate = date => {
    return moment(new Date(date))
        .format("YYYY MMMM")
}

const ExperienceCard = props => {
    const startDate = fromatDate(props.data.startDate);
    const endDate = fromatDate(props.data.endDate);

    return (
        <div>
            <div className="row">
                <div className="col"><h4>{props.data.company}</h4></div>
                <div className="col"><h4>{props.data.position}</h4></div>
            </div>

            <div className="row">
                <div className="col">
                    From: {startDate}
                    <br />
                To: {endDate}</div>
            </div>
        </div>
    )
}

export default ExperienceContainer;