
import React from 'react';
import * as gs from '../../_globalStyles/globalStyles.module.css';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';



class AddressForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            address: {
                city: this.props.address.city || '',
                street: this.props.address.street || '',
                number: this.props.address.number || '',
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { city, number, street } = this.state.address;
        this.props.saveProfile({ address: { city, number, street } });
    }

    handleChange(e) {
        const name = e.target.name;
        this.setState({
            address: {
                ...this.state.address,
                [name]: e.target.value,
            }
        })
    }


    render() {
        return (

            < div className={gs.myContainer} >
                <h2>Address</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="city">City:</label>
                            <input name="city" value={this.state.address.city} onChange={this.handleChange} />
                        </div>
                        <div className="col">
                            <label htmlFor="street">Street: </label>
                            <input name="street" value={this.state.address.street} onChange={this.handleChange} />
                        </div>

                        <div className="col">
                            <label htmlFor="number">Number: </label>
                            <input name="number" value={this.state.address.number} onChange={this.handleChange} />
                        </div>
                    </div>
                    <button className={[gs.btn, gs.btnImportant].join(' ')} type="submit">Save</button>
                </form>
            </div>
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

export default connect(null, mapDispatchToProps)(AddressForm);

