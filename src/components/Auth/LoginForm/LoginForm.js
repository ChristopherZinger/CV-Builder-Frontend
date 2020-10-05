import React, { Fragment } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import { connect } from 'react-redux';



const LoginForm = props => {
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

    const submit = {
        txt: 'login',
        isSignup: false
    }

    return (
        <Fragment>
            <AuthForm
                submit={submit}
                inputs={inputs}
            >
                <h4>Login</h4>
                <p>Login to your CV builder with your email and password.</p>
            </AuthForm>
        </Fragment>
    )
}


const mapStateToProps = state => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated,
    }
}

export default connect(mapStateToProps)(LoginForm);
