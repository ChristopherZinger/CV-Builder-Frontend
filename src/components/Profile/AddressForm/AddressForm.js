
import React from 'react';
import globalStyles from '../../_globalStyles/globalStyles.module.css';
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

            < div className={globalStyles.myContainer} >
                <h2>Profile</h2>
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="city">City:</label>
                    <input name="city" value={this.state.address.city} onChange={this.handleChange} />

                    <label htmlFor="street">Street: </label>
                    <input name="street" value={this.state.address.street} onChange={this.handleChange} />

                    <label htmlFor="number">Number: </label>
                    <input name="number" value={this.state.address.number} onChange={this.handleChange} />

                    <button className={globalStyles.btn} type="submit">Submit</button>
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









// import React from 'react';
// import { Formik, Form, Field } from 'formik';
// import globalStyles from '../../_globalStyles/globalStyles.module.css';
// import { connect } from 'react-redux';
// import * as actions from '../../../store/actions/index';



// class AddressForm extends React.Component {
//     constructor(props) {
//         super(props)
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleSubmit(values, actions) {
//         const { city, number, street } = values
//         console.log(city)
//         this.props.saveProfile({ address: { city, number, street } });
//     }


//     render() {
//         return (
//             <div className={globalStyles.myContainer}>
//                 <Formik
//                     initialValues={{
//                         city: this.props.city || '',
//                         number: this.props.number || '',
//                         street: this.props.street || ''
//                     }}
//                     onSubmit={(values, actions) => {
//                         console.log(actions)
//                         this.handleSubmit(values, actions);
//                     }}
//                 >
//                     {props => (
//                         <Form>
//                             <h3>Address</h3>

//                             <label htmlFor="city" >City</label>
//                             <Field type="text" name="city" placeholder="City" />

//                             <label htmlFor="street" >Street</label>
//                             <Field type="text" name="street" placeholder="Street" />

//                             <label htmlFor="number" >Appartment Number</label>
//                             <Field type="text" name="number" placeholder="Appartment Number" />

//                             {props.errors.name && <div id="feedback">{props.errors.name}</div>}
//                             <button className={globalStyles.btn} type="submit">Submit</button>
//                         </Form>
//                     )}
//                 </Formik>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     const profile = state.profileReducers
//     return {
//         city: profile.address.city,
//         street: profile.address.street,
//         number: profile.address.number,
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         saveProfile: (data) => {
//             return dispatch(actions.saveProfile(data))
//         },
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AddressForm);