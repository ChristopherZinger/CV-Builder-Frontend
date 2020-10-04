import React from 'react';
import globalStyles from '../../_globalStyles/globalStyles.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';


class ProfileForm extends React.Component {
    constructor(props) {
        super(props)

        const dateIsUndefined = this.props.profile.birthdate === undefined;
        const birthdate = dateIsUndefined ? new Date() : new Date(this.props.profile.birthdate)


        this.state = {
            profile: {
                firstname: this.props.profile.firstname || '',
                lastname: this.props.profile.lastname || '',
                birthdate: birthdate
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e.target)
        const { firstname, lastname, birthdate } = this.state.profile;

        this.props.saveProfile({ info: { firstname, lastname, birthdate } });
    }

    handleChange(e) {
        const target = e.target
        const name = target.name;
        this.setState({
            profile: {
                ...this.state.profile,
                [name]: target.value,
            }
        })
    }

    handleDateChange(date) {
        this.setState({
            profile: {
                ...this.state.profile,
                birthdate: date,
            }
        })
    }

    render() {
        return (
            < div className={globalStyles.myContainer} >
                <h2>Profile</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="firstname">First Name</label>
                    <input name="firstname" value={this.state.profile.firstname} onChange={this.handleChange} />

                    <label htmlFor="lastname">Last Name</label>
                    <input name="lastname" value={this.state.profile.lastname} onChange={this.handleChange} />

                    <label htmlFor="birthdate">Birth Date</label>

                    <DatePicker
                        selected={this.state.profile.birthdate}
                        value={this.state.profile.birthdate}

                        onChange={this.handleDateChange}
                        name="birthdate"
                        dateFormat="MM/dd/yyyy"
                    />

                    <button className={globalStyles.btn} type="submit">Submit</button>
                </form>
            </div >
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveProfile: (data) => {
            return dispatch(actions.saveProfile(data))
        },
    }
}

export default connect(null, mapDispatchToProps)(ProfileForm);

