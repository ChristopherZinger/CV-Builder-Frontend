import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

import styles from './App.module.css';

import Navbar from './components/Navbar/Navbar';
import SignupForm from './components/Auth/SignupForm/SignupForm';
import LoginForm from './components/Auth/LoginForm/LoginForm';
import Logout from './components/Auth/Logout/Logout';
import ProfileLayout from './components/Profile/ProfileLayout/ProfileLayout';
import ExperienceLayout from './components/Experience/ExperienceLayout/ExperienceLayout';
import EducationLayout from './components/Education/EducationLayout/EducationLayout';
import CVLayout from './components/CV/CVLayout/CVLayout';
import * as gs from './components/_globalStyles/globalStyles.module.css';

const Layout = props => {
  let redirect;
  if (props.isAuth) {
    redirect = "/";
  } else {
    redirect = "/login";
  }

  return (
    <Router >
      <Navbar />
      <div className={styles.contentContainer}>
        <Switch >
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/login" component={LoginForm} />

          <Route path="/logout" component={Logout} />
          <Route path="/profile" component={ProfileLayout} />
          <Route path="/experience" component={ExperienceLayout} />
          <Route path="/education" component={EducationLayout} />
          <Route path="/cv-list" component={CVLayout} />

          <Route path="/missing" component={_404} />

          <Redirect to={redirect} />
        </Switch>
      </div>
    </Router>
  )
}

const Home = () => {
  return (
    <div className={gs.defaultContainer}>
      <br /> <br /> <br />
      <h1>Hello</h1>
      <hr />
      <p>Welcome to CV-Builder!</p>

      <br /><br /><br />
      <h3>how to ...</h3>
      <p>Here are some tips on how to use this app:</p>

      <ul className={styles.list}>
        <li>
          First go to
          <Link to='/profile' className="nav-link" >profile</Link>
          and fill information about yourself. Remember to save after you fill each box.
          </li>
        <li>
          Next you can go to
          <Link to='/experience' className="nav-link" >experience</Link>
          to enter information about your professional experience.
          </li>
        <li>
          Last part to fill is your
          <Link to='/education' className="nav-link" >education</Link>.
          Remember to save it :)
          </li>
        <li>
          Now you are ready to see your
          <Link to='/cv-list' className="nav-link" >CV</Link>
        </li>
      </ul>
    </div>
  )
}

const _404 = () => {
  return (
    <div className={gs.defaultContainer}>
      <br /> <br /> <br />
      <h1>404</h1>
      <hr />
      <p>Sorry. This page is missing.</p>
    </div>
  )
}



class App extends React.Component {
  componentDidMount() {
    this.props.updateToken();
  }

  render() {
    return (
      <div className="App">
        <Layout isAuth={this.props.isAuth} />
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    updateToken: () => dispatch(actions.updateToken()),
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.authReducer.isAuthenticated,
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(App);
