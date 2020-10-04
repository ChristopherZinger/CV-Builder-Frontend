import React from 'react';
import * as gs from '../../_globalStyles/globalStyles.module.css';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';



class EducationForm extends React.Component {
    constructor(props) {
        super(props)

        // check start date
        const startDateIsUndefined = this.props.data.startDate === undefined;
        const startDate = startDateIsUndefined ? '' : new Date(this.props.data.startDate)
        // check end date
        const endDateIsUndefined = this.props.data.endDate === undefined;
        const endDate = endDateIsUndefined ? '' : new Date(this.props.data.endDate)

        this.state = {
            startDate: startDate || '',
            endDate: endDate || '',
            school: this.props.data.school || '',
            title: this.props.data.title || '',
            course: this.props.data.course || '',
            id: this.props.data._id || '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = this.state;
        this.props.saveEducation(data);
        if (this.props.clearOnSave) this.props.clearOnSave();
    }

    handleChange(e) {
        const name = e.target.name;
        this.setState({ [name]: e.target.value });
    }

    handleDateChange(name, date) {
        this.setState({
            [name]: date,
        })
    }

    handleRemoveEducation() {
        this.props.removeEducation(this.state.id);
    }

    render() {
        const removeBtn = (
            <button onClick={this.handleRemoveEducation.bind(this)}
                className={[gs.btn, gs.btnDisabled].join(' ')} >
                remove</button>
        )
        return (
            <div>
                <form onSubmit={this.handleSubmit}  >
                    <input type="text" value={this.state.id}
                        name="id" hidden readOnly />

                    <div className="row">
                        <div className="col">
                            <label htmlFor="school" >School Name:</label>
                            <input type="text" value={this.state.school}
                                onChange={this.handleChange} name="school"
                                placeholder="School Name eg. 'Politecnico di Milano' " required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="course" >Course Name:</label>
                            <input type="text" value={this.state.course}
                                onChange={this.handleChange} name="course"
                                placeholder="Course Name eg. 'Mechanical Engineering' or 'Management and Marketing' " required />
                        </div>

                        <div className="col">
                            <label htmlFor="title" >Title:</label>
                            <input type="text" value={this.state.title}
                                onChange={this.handleChange} name="title"
                                placeholder="Title eg. 'Master of Science' or 'PhD' " required />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="startDate" >Start Date: </label>
                            <DatePicker
                                selected={this.state.startDate}
                                value={this.state.startDate}
                                onChange={this.handleDateChange.bind(this, "startDate")}
                                name="startDate"
                                dateFormat="MM/dd/yyyy"
                            />
                        </div>
                        <div className="col">

                            <label htmlFor="endDate" >Graduation: </label>
                            <DatePicker
                                selected={this.state.endDate}
                                value={this.state.endDate}
                                onChange={this.handleDateChange.bind(this, "endDate")}
                                name="endDate"
                                dateFormat="MM/dd/yyyy"
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            {/* Submit Btn */}
                            <button className={[gs.btn, gs.btnImportant].join(' ')} type="submit">Save</button>
                        </div>
                        <div className="col">

                            {/* Cancel / Reove Btn */}
                            {this.props.children
                                ? this.props.children
                                : removeBtn}
                        </div>
                    </div>
                </form>
            </div >
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveEducation: (data) => dispatch(actions.saveEducation(data)),
        removeEducation: (id) => dispatch(actions.removeEducation(id)),
    }
}

export default connect(mapDispatchToProps, mapDispatchToProps)(EducationForm);