
import React, { Fragment } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import { connect } from 'react-redux';


const SignupForm = props => {
    // redirect after login
    if (props.isAuthenticated) props.history.push('/');


    const inputs = []

    // add email field
    inputs.push({
        input: {
            id: "email",
            name: "email",
            type: "email",
            placeholder: "Email",
            classes: [],
        },
        label: {
            txt: "Email"
        },
        info: {
            classes: []
        }
    })

    // add password field
    inputs.push({
        input: {
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Password",
            classes: [],
        },
        label: {
            txt: "Password"
        },
        info: {
            classes: []
        }
    })

    // add password confirmation field
    inputs.push({
        input: {
            id: "passwordConfirm",
            name: "passwordConfirm",
            type: "password",
            placeholder: "Confirm Password",
            classes: [],
        },
        label: {
            txt: "Confirm Password"
        },
        info: {
            classes: []
        }
    })

    const submit = {
        txt: 'submit',
        isSignup: true
    }

    return (
        <Fragment>
            <AuthForm
                submit={submit}
                inputs={inputs}
            >
                <h4>Signup</h4>
                <p>Welcome to CV builder. Create new accout with your email.</p>
            </AuthForm>
        </Fragment>
    )
}


const mapStateToProps = state => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated,
    }
}

export default connect(mapStateToProps)(SignupForm);
