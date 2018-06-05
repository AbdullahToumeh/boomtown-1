import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Login from './Login';
import { auth } from '../../firebase/firebase';

class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }
  static propTypes = {};

  handleEmail = event => {
    this.setState({ email: event.target.value });
  };

  handlePassword = event => {
    this.setState({ password: event.target.value });
  };

  login = async event => {
    const { email, password } = this.state;
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.props.history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <Login
        login={this.login}
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
      />
    );
  }
}

export default LoginContainer;
