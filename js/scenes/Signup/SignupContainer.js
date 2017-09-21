import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUp } from '../../config/helpers';
import Signup from './Signup';
import Router from '../../navigation/routes';
import {
  updateEmailField,
  updatePasswordField,
  updateFullnameField
} from '../../redux/modules/user-forms';

class SignupContainer extends Component {

  signupRedirect = () => {
    this.props.navigator.push(Router.getRoute('navigation'))
    // this.props.navigator.immediatelyResetStack([
    //   Router.getRoute('navigation')
    // ], 0);
  }

  handleEmail = (event) => {
    this.props.dispatch(updateEmailField(event));
  }

  handlePassword = (event) => {
    this.props.dispatch(updatePasswordField(event));
  }

  handleFullname = (event) => {
    this.props.dispatch(updateFullnameField(event));
  }

  signupHandler = () => {
    const { emailField, passwordField, fullnameField } = this.props
    if (emailField.length && passwordField.length && fullnameField.length) {
      const user = {
        email: this.props.emailField,
        password: this.props.passwordField,
        name: this.props.fullnameField
      }
      const newUser = signUp(user).then(user => {
        this.signupRedirect()
      }).catch(err  => {
        (console.log(err))
      })
    
    }
  };

  render() {
    return (
      <Signup
        emailField={this.props.emailField}
        passwordField={this.props.passwordField}
        fullnameField={this.props.fullnameField}

        signupHandler={this.signupHandler}

        handleEmail={(e) => {
          this.handleEmail(e)
        }}

        handlePassword={(e) => {
          this.handlePassword(e)
        }}

        handleFullname={(e) => {
          this.handleFullname(e)
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  emailField: state.forms.emailField,
  passwordField: state.forms.passwordField,
  fullnameField: state.forms.fullnameField
});

SignupContainer.propTypes = {
  dispatch: PropTypes.func,
  emailField: PropTypes.string,
  passwordField: PropTypes.string,
  fullnameField: PropTypes.string
};

export default connect(mapStateToProps)(SignupContainer);