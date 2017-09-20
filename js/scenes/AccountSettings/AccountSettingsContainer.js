import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ImagePickerIOS } from 'react-native';
import AccountSettings from './AccountSettings';
import { logout } from '../../config/helpers';
import { 
  updateEmailField, 
  updatePasswordField,
  updateFullnameField,
  updateImageUrlField
} from '../../redux/modules/user-forms';


class AccountSettingsContainer extends Component {

  static route = {
    navigationBar: {
      title: 'ACCOUNT SETTINGS',
    }
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

  handleImageUpload = () => {
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.props.dispatch(updateImageUrlField(imageUri));
    }, error => console.error(error));
  }

  handleLogout = () => {
    logout()
  }


  render() {
    return (
      <AccountSettings 
        emailField={this.props.emailField}
        passwordField={this.props.passwordField}
        fullnameField={this.props.fullnameField}
        imageUrl={this.props.imageUrl}

        handleEmail={(e) => {
          this.handleEmail(e)
        }}

        handlePassword={(e) => {
          this.handlePassword(e)
        }}

        handleFullname={(e) => {
          this.handleFullname(e)
        }}

        handleImageUpload={this.handleImageUpload}

        handleLogout={this.handleLogout}
      />
    );
  }
}

const mapStateToProps = state => ({
  emailField: state.forms.emailField,
  passwordField: state.forms.passwordField,
  fullnameField: state.forms.fullnameField,
  imageUrl: state.forms.imageUrl
});

AccountSettingsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  emailField: PropTypes.string.isRequired,
  passwordField: PropTypes.string.isRequired,
  fullnameField: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(AccountSettingsContainer);