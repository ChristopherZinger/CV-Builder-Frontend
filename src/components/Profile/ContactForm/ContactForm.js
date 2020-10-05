import React, { Fragment } from 'react';
import * as gs from '../../_globalStyles/globalStyles.module.css';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class ContactFormContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contactType: '',
            contactValue: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

    }
    handleChange({ target }) {
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value })
    }

    handleRemove(id) {
        this.props.removeContact(id)
    }

    handleSubmit(e) {
        e.preventDefault();

        const data = {
            contact: {
                type: this.state.contactType,
                value: this.state.contactValue
            }
        }
        this.props.saveProfile(data);
        this.setState({
            contactType: '',
            contactValue: '',
        })
    }

    render() {
        return (
            <div className={gs.myContainer}>
                <h3>Contact</h3>
                <ContactForm
                    submit={this.handleSubmit}
                    handleChange={this.handleChange}
                    contactType={this.state.contactType}
                    contactValue={this.state.contactValue}
                />

                < ContactList contacts={this.props.contacts}
                    isLoading={this.props.isLoading} remove={this.handleRemove} />

            </div>
        )
    }
}

const ContactForm = props => {
    return (

        <form onSubmit={props.submit}>
            <div className="row">
                <div className="col-4">
                    <input type="text"
                        name="contactType"
                        placeholder="Type of contact eg. Phone or Link"
                        onChange={props.handleChange}
                        value={props.contactTypeV}
                        disabled={props.isLoading}
                    />
                </div>
                <div className="col-6">
                    <input type="text"
                        name="contactValue"
                        placeholder="Contact eg. +44 333 333 333 or http://www.google.com"
                        onChange={props.handleChange}
                        value={props.contactValue}
                        disabled={props.isLoading}
                    />
                </div>
                <div className="col-2">
                    <button className={[gs.btn, gs.btnSquare].join(' ')}
                        type="submit" disabled={props.isLoading}
                        disabled={props.isLoading}
                    >
                        add
                    </button>
                </div>
            </div>
            <br />

        </form>
    )
}

const ContactList = props => {
    const contacts = props.contacts || [];
    return (

        <Fragment >
            {contacts.map(c => {
                if (!c._id) return null;
                const id = c._id;
                return (
                    <div key={c._id}>
                        <div className="row">
                            <div className="col-8">
                                {c.type + " : " + c.value}
                            </div>
                            <div className="col-4">
                                <button className={gs.btn}
                                    onClick={() => props.remove(id)} >
                                    remove</button>
                            </div>
                        </div>
                        <hr />
                    </div>
                )
            })}
        </Fragment >
    )
}


const mapDisaptchToProps = dispatch => {
    return {
        saveProfile: (data) => dispatch(actions.saveProfile(data)),
        removeContact: (id) => dispatch(actions.removeContact(id)),
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.profileReducers.contact,
        isLoading: state.profileReducers.isLoading,
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(ContactFormContainer);