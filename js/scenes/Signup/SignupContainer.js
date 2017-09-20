import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUp } from '../../config/helpers';
import Signup from './Signup';
import { 
  updateEmailField, 
  updatePasswordField,
  updateFullnameField
} from '../../redux/modules/user-forms';

class SignupContainer extends Component {

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
    if (this.props.emailField.length && this.props.passwordField.length && this.props.fullnameField.length) {
      const user = {
        email: this.props.emailField,
        password: this.props.passwordField,
        name: this.props.fullnameField
      }
      signUp(user)
    }
  }


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
  dispatch: PropTypes.func.isRequired,
  emailField: PropTypes.string.isRequired,
  passwordField: PropTypes.string.isRequired,
  fullnameField: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(SignupContainer);