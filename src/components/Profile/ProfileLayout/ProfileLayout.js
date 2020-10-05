import React, { Fragment } from 'react';
import ProfileForm from '../ProfileForm/ProfileForm';
import AddressForm from '../AddressForm/AddressForm';
import ContactFormContainer from '../ContactForm/ContactForm';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import * as gs from '../../_globalStyles/globalStyles.module.css';
import { Link } from 'react-router-dom';


class ProfileLayout extends React.Component {

    componentDidMount() {
        this.props.getProfile()
    }

    render() {
        let content = (<div>loading</div>);
        if (!this.props.isLoading) {
            content = (
                <Fragment >
                    <ProfileForm profile={this.props.profile} />
                    <AddressForm address={this.props.address} />
                    <ContactFormContainer />
                </Fragment>
            )
        }
        return (
            <div>
                <div className={gs.defaultContainer}>
                    <br /> <br /> <br />
                    <h1>Personal Information</h1>
                    <hr />
                    <p className={gs.p}>Fill the information below. <br />
                    Once you finish you can move on to
                    <Link to='/experience' className="nav-link" >Experience</Link>
                    </p>

                </div>
                { content}
            </div >

        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProfile: () => dispatch(actions.getProfile()),
    }
}

const mapStateToProps = state => {
    const profile = state.profileReducers
    return {
        isLoading: profile.isLoading,
        profile: {
            ...profile.info
        },
        address: {
            ...profile.address
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileLayout);