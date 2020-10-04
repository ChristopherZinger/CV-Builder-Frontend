
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends React.Component {
    render() {
        const links = this.props.isAuthenticated
            ? (<Fragment>

                <li className="nav-item">
                    <Link to='/profile' className="nav-link" >Profile</Link>
                </li>
                <li className="nav-item">
                    <Link to='/experience' className="nav-link" >Experience</Link>
                </li>
                <li className="nav-item">
                    <Link to='/education' className="nav-link" >Education</Link>
                </li>
                <li className="nav-item">
                    <Link to='/cv-list' className="nav-link" >CV List</Link>
                </li>
                <li className="nav-item">
                    <Link to='/logout' className="nav-link" >Logout </Link>
                </li>
            </Fragment>)
            : (<Fragment>
                <li className="nav-item">
                    <Link to='/login' className="nav-link" >Login </Link>
                </li>
                <li className="nav-item">
                    <Link to='/signup' className="nav-link" >Signup </Link>
                </li>
            </Fragment>)


        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to='/' className="navbar-brand" >CV-BUILDER</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        {links}
                    </ul>
                </div>
            </nav>
        )
    }
}


const mapStateToProps = state => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated
    }
}


export default connect(mapStateToProps)(Navbar);