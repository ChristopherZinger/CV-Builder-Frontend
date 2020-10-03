import React, { Fragment } from 'react';
import ProfileForm from '../ProfileForm/ProfileForm';
import AddressForm from '../AddressForm/AddressForm';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

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
                </Fragment>
            )
        }
        return (
            <div>
                { content}
            </div>

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