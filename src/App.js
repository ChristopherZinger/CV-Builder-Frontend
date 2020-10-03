import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
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

class Layout extends React.Component {

  render() {
    return (
      <Router >
        <Navbar />
        <div className={styles.contentContainer}>
          <Switch >
            <Route path="/signup" component={SignupForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/profile" component={ProfileLayout} />
            <Route path="/experience" component={ExperienceLayout} />
          </Switch>
        </div>
      </Router>
    )
  }
}



class App extends React.Component {
  componentDidMount() {
    this.props.updateToken();
  }

  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    updateToken: () => dispatch(actions.updateToken()),
  }
}



export default connect(null, mapDispatchToProps)(App);
