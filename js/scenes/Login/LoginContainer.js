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
import { loginSuccess, loginError, loginBegin } from '../../redux/modules/auth'

class LoginContainer extends Component {

  componentDidMount() {
    if (auth.currentUser) {
      this.loginRedirect()
    }
  }
  loginRedirect = () => {
    this.props.navigator.push(Router.getRoute('home'));
  }


  logUser = (loggedInUser) => {
    console.log("JUST A TEST!")
    const { dispatch } = this.props
    dispatch(loginBegin());
    setTimeout( () => { login(loggedInUser).then(user => {
      dispatch(loginSuccess(user));
      this.loginRedirect();
    }).catch(error => {
      dispatch(loginError(error))
    }) }, 1600)
  }

  handleEmail = (event) => {
    this.props.dispatch(updateEmailField(event))
  };

  handlePassword = (event) => {
    this.props.dispatch(updatePasswordField(event))
  };

  loginHandler = async () => {
    const { emailField, passwordField } = this.props
    if (emailField.length && passwordField.length) {
      const loggedInUser = {
        email: this.props.emailField,
        password: this.props.passwordField
      }
      this.logUser(loggedInUser);
    }
  };

  render() {
    const { isLoading, error } = this.props.auth
    return (
      <Login
        emailField={this.props.emailField}
        passwordField={this.props.passwordField}
        error={error}
        loginHandler={this.loginHandler}
        isLoading={isLoading}
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
  auth: state.auth
});

LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  emailField: PropTypes.string.isRequired,
  passwordField: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(LoginContainer);
