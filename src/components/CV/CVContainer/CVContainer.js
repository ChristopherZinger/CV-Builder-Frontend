import React, { Fragment } from 'react';
import * as gs from '../../_globalStyles/globalStyles.module.css';
import { formatDate } from '../../../utils/time/time';
import moment from 'moment';


const CVContainer = props => {
    const isLoading = props.cv ? false : true;
    return (
        <Fragment>
            {
                !isLoading ?
                    <div className={gs.myContainer}>
                        <div>
                            <h3>Profile</h3>
                            <hr />
                            <ProfileSection profile={props.cv.profile} />
                        </div>
                        <br /> <br />
                        <div>
                            <h3>Experience</h3>
                            <hr />
                            <ExperienceList list={props.cv.experience} />
                        </div>
                        <br /> <br />
                        <div>
                            <h3>Education</h3>
                            <hr />
                            <EducationList list={props.cv.education} />
                        </div>
                    </div>
                    :
                    null
            }
        </Fragment>
    )
}

const ProfileSection = props => {
    const email = props.profile.contact.filter(c => c.type === "email")[0];
    const contactElements = props.profile.contact.map(c => {
        if (!c._id) return null;
        return <div key={c._id}>{c.type + ': ' + c.value}</div>
    })

    return (
        <div>
            <div className="row">
                <div className="col">
                    <div>{props.profile.info.firstname + ' ' + props.profile.info.lastname}</div>
                    <div>birth: {moment(props.profile.info.birthdate).format("dd MM YYYY")}</div>
                </div>
                <div className="col">
                    <div>email: {email.value}</div>
                    <div>{props.profile.address.city}</div>
                    <div>{props.profile.address.street + ', ' + props.profile.address.number}</div>
                </div>
                <div className="col">
                    {contactElements}
                </div>
            </div>
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
                                    From:  {formatDate(exp.startDate)}
                                </div>
                                <div>
                                    To:  {formatDate(exp.startDate)}
                                </div>
                            </div>
                        </div>
                        <br />
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
                                    From:  {formatDate(edu.startDate)}
                                </div>
                                <div>
                                    To:  {formatDate(edu.startDate)}
                                </div>

                            </div>
                        </div>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export default CVContainer;