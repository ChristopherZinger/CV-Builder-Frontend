import React from 'react';
import globalStyles from '../../_globalStyles/globalStyles.module.css';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class ExperienceForm extends React.Component {
    constructor(props) {
        super(props)

        // check start date
        const startDateIsUndefined = this.props.data.startDate === undefined;
        const startDate = startDateIsUndefined ? '' : new Date(this.props.data.startDate)
        // check end date
        const endDateIsUndefined = this.props.data.endDate === undefined;
        const endDate = endDateIsUndefined ? '' : new Date(this.props.data.endDate)

        this.state = {
            startDate: startDate,
            endDate: endDate,
            company: this.props.data.company || '',
            position: this.props.data.position || '',
            id: this.props.data._id,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = this.state;
        this.props.saveExperience(data);
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

    handleRemoveExperience() {
        this.props.removeExperience(this.state.id);
    }

    render() {
        return (
            <div>
                <div className={globalStyles.formContainer}>
                    <form onSubmit={this.handleSubmit}  >

                        <label htmlFor="company" >Company:</label>
                        <input type="text" value={this.state.company}
                            onChange={this.handleChange} name="company"
                            placeholder="company" required />

                        <label htmlFor="position" >Position:</label>
                        <input type="text" value={this.state.position}
                            onChange={this.handleChange} name="position"
                            placeholder="position" required />

                        <label htmlFor="startDate" >Start Date: </label>
                        <DatePicker
                            selected={this.state.startDate}
                            value={this.state.startDate}
                            onChange={this.handleDateChange.bind(this, "startDate")}
                            name="startDate"
                            dateFormat="MM/dd/yyyy"
                        />

                        <label htmlFor="endDate" >End Date: </label>
                        <DatePicker
                            selected={this.state.endDate}
                            value={this.state.endDate}
                            onChange={this.handleDateChange.bind(this, "endDate")}
                            name="endDate"
                            dateFormat="MM/dd/yyyy"
                        />

                        <button className={globalStyles.btn} type="submit">Submit</button>
                    </form>
                    <button onClick={this.handleRemoveExperience.bind(this)} >remove</button>
                    {this.props.removebtn}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveExperience: (data) => dispatch(actions.saveExperience(data)),
        removeExperience: (id) => dispatch(actions.removeExperience(id)),
    }
}

export default connect(mapDispatchToProps, mapDispatchToProps)(ExperienceForm);