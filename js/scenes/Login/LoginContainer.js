import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../config/helpers';
import Login from './Login';
import Router from '../../navigation/routes'
import { auth } from '../../config/firebase';
import {
  updateEmailField,
  updatePasswordField
} from '../../redux/modules/user-forms';

class LoginContainer extends Component {

  componentWillMount() {
    if (auth.currentUser) {
      this.loginRedirect()
    }
  }
  loginRedirect() {
    this.props.navigator.push(Router.getRoute('home'));
  }

  handleEmail = (event) => {
    this.props.dispatch(updateEmailField(event))
  };

  handlePassword = (event) => {
    this.props.dispatch(updatePasswordField(event))
  };

  loginHandler = async () => {
    if (this.props.emailField.length && this.props.passwordField.length) {
      const loggedInUser = {
        email: this.props.emailField,
        password: this.props.passwordField
      }
      try {
        const success = await login(loggedInUser)
        if (success) {
          this.loginRedirect()
        }
      } catch (e) {
        console.log(e)
      }
    }
  };

  render() {

    return (
      <Login
        emailField={this.props.emailField}
        passwordField={this.props.passwordField}

        loginHandler={this.loginHandler}

        handleEmail={(event) => {
          this.handleEmail(event)
        }}
        handlePassword={(event) => {
          this.handlePassword(event)
        }}
      />
    )
  }
}

const mapStateToProps = state => ({
  emailField: state.forms.emailField,
  passwordField: state.forms.passwordField,
});

LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  emailField: PropTypes.string.isRequired,
  passwordField: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(LoginContainer);
