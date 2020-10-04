
import React from 'react';
import * as gs from '../../_globalStyles/globalStyles.module.css';


const CVContainer = props => {
    const isLoading = props.cv ? false : true;



    return (
        <div>
            {
                !isLoading ?
                    <div className={gs.myContainer}>
                        <div>
                            <h3>Experience</h3>
                            <hr />
                            <ExperienceList list={props.cv.experience} />
                        </div>
                        <br /> <br />
                        <div>
                            <h3>Education</h3>
                            <hr />
                            <EducationList list={props.cv.experience} />
                        </div>
                    </div>
                    :
                    null
            }
        </div>
    )
}


const ExperienceList = props => {
    return (
        <div>
            { props.list.map(exp => {
                return (
                    <div key={exp._id}>
                        <div className="row">
                            <div className="col">
                                <h5>{exp.company}</h5>
                            </div>
                            <div className="col">
                                <h5>{exp.position}</h5>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div>
                                    From:  {exp.startDate}
                                </div>
                                <div>
                                    To:  {exp.startDate}
                                </div>

                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const EducationList = props => {
    return (
        <div>
            { props.list.map(edu => {
                return (
                    <div key={edu._id}>
                        <div className="row">
                            <div className="col">
                                <h5>{edu.school}</h5>
                            </div>
                            <div className="col">
                                <h5>{edu.title}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                {edu.course}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div>
                                    From:  {edu.startDate}
                                </div>
                                <div>
                                    To:  {edu.startDate}
                                </div>

                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CVContainer;