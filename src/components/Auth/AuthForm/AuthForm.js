import React from 'react';
import * as EmailValidator from "email-validator";
import styles from './AuthForm.module.css';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';


const MyInput = props => {
    const touched = props.touched
    return (
        <div>
            <label htmlFor={props.input.id}>{props.label.txt}</label>
            <br />
            <input type={props.input.type} name={props.input.name}
                className={[...props.input.classes].join(' ')} id={props.input.id}
                placeholder={props.input.placeholder} onChange={props.input.onChange}
                value={props.input.value} onBlur={props.input.onBlur}
            />

            <small id={props.info.id} className={[...props.info.classes].join(' ')}>
                {touched ? props.message : ""}
            </small>
        </div>
    )
}



class AuthForm extends React.Component {
    constructor(props) {
        super(props)

        // create default values for inputs
        const inputs = {};
        this.props.inputs.forEach(inputField => {
            const key = inputField.input.name;
            inputs[key] = {
                value: '',
                isValid: false,
                touched: false,
                message: []
            }
        });

        this.state = { ...inputs };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.emailIsValid = this.emailIsValid.bind(this);
        this.passwordIsValid = this.passwordIsValid.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
        this.inputsAreValid = this.inputsAreValid.bind(this);
    }

    inputIsValid({ name, value }) {

        // value => {email: "something"}
        if (name === 'email') return this.emailIsValid(value);

        // value => {password: "something", passwordConfirm: "something"}
        if (name === 'password') return this.passwordIsValid(value);

        if (name === 'passwordConfirm') return this.passwordConfirmIsValid(value);

        return null;
    }

    emailIsValid(value) {
        const isValid = EmailValidator.validate(value)
            ? true : false;
        const message = isValid ? '' : ['This email is not valid.',]
        return { isValid, message };
    }

    passwordIsValid(password) {
        const message = [];

        let isValid = true;

        // password length
        if (password.length < 6) {
            message.push('Password is too short. Must be at least 6 characters.')
            isValid = false
        }

        // check if password is repeated correctly
        (function (self) {
            const passwordConfirm = self.state.passwordConfirm && self.state.passwordConfirm.value;
            if (!passwordConfirm) return; // return if no passwordConfirm field
            const message = password === passwordConfirm ? [] : ['Type the same password twice.'];
            self.setState({
                passwordConfirm: {
                    ...self.state.passwordConfirm,
                    isValid: false,
                    message: message
                }
            })
        })(this)

        return { isValid, message };
    }

    passwordConfirmIsValid(passwordConfirm) {
        const message = [];
        let isValid = true;
        const password = this.state.password.value;

        // compare passwords
        if (password !== passwordConfirm) {
            isValid = false;
            message.push('Type the same password twice.')
        }
        return { isValid, message };
    }

    handleInputChange({ target }) {
        const inputName = target.name;
        const inputValue = target.value;
        const { isValid, message } = this.inputIsValid(target)

        this.setState({
            [inputName]: {
                ...this.state[inputName],
                value: inputValue,
                isValid,
                message
            }
        });
    }

    handleBlur({ target }) {
        this.setState({
            [target.name]: {
                ...this.state[target.name],
                touched: true
            }
        })
    }

    handleSubmit(e) {
        // exit if inputs are not valid
        if (!this.inputsAreValid()) return;

        // prevent default
        e.preventDefault();

        // data to be sent
        const email = this.state.email.value;
        const password = this.state.password.value;

        // url 
        const isSignup = this.props.submit.isSignup;

        // let redux take care of authentication now
        this.props.auth(email, password, isSignup)
    }

    handleErrors(err) {
        const { errors } = err.response.data;
        Object.keys(errors).forEach(key => {
            if (this.state[key]) {
                this.setState({
                    [key]: {
                        ...this.state[key],
                        message: errors[key]
                    },
                })
            }
        })
    }

    inputsAreValid() {
        return Object.keys(this.state).filter(key => this.state[key].isValid === false).length === 0;
    }

    render() {
        const inputFields = this.props.inputs.map((inputField, i) => {
            // add handling change method
            inputField.input.onChange = this.handleInputChange;
            inputField.input.onBlur = this.handleBlur;
            const inputName = inputField.input.name

            // // add validation error messages
            let message = [...this.state[inputName].message];

            // add server error messages
            const serverMessage = this.props.errors[inputName]
            if (serverMessage) message = serverMessage;

            return (
                <MyInput
                    {...inputField} {...this.state[inputName]}
                    key={i}
                    value={this.state[inputName]}
                    message={message}
                />
            )
        })

        const btnStyle = this.inputsAreValid()
            ? null
            : styles.btnInactive;

        return (
            <form onSubmit={this.handleSubmit} className={styles.authform}>
                {this.props.children}
                {inputFields}
                <button type="submit" className={[styles.btnAuth, btnStyle].join(' ')}>{this.props.submit.txt || 'Go!'}</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.authReducer.isLoading,
        isAuthenticated: state.authReducer.isAuthenticated,
        errors: state.authReducer.errors
    }
}


const mapDispatchToProps = dispatch => {
    return {
        auth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm); 
