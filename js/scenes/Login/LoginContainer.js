import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../config/helpers';
import Login from './Login';
import Router from '../../navigation/routes';
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
    // this.props.navigator.immediatelyResetStack([
    //   Router.getRoute('navigation')
    // ], 0);
    this.props.navigator.push(Router.getRoute('navigation'))
  }


  logUser = (loggedInUser) => {

    const { dispatch } = this.props
    dispatch(loginBegin());
    login(loggedInUser)
      .then(user => {
        dispatch(loginSuccess());
        this.loginRedirect();
      }).catch(error => {
        dispatch(loginError(error))
      })
  }

  handleEmail = (event) => {
    this.props.dispatch(updateEmailField(event))
  };

  handlePassword = (event) => {
    this.props.dispatch(updatePasswordField(event))
  };

  loginHandler =  () => {
    const { emailField, passwordField } = this.props
    if (emailField.length && passwordField.length && emailField && passwordField) {
      const loggedInUser = {
        email: this.props.emailField,
        password: this.props.passwordField
      }
      login(loggedInUser)
        .then((resolve)=>{
          if(resolve) {
            this.loginRedirect()
          }
        }, (error)=> {
          console.log(error)
        })
      // try {
      //   await login(loggedInUser)

      //   await this.loginRedirect()
       
      // }
      // catch (error) {
      //   throw (error)
      // }

      //this.logUser(loggedInUser);
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
  dispatch: PropTypes.func,
  emailField: PropTypes.string,
  passwordField: PropTypes.string,
}

export default connect(mapStateToProps)(LoginContainer);
