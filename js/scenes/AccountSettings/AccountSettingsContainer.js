import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AccountSettings from './AccountSettings';
import {
  updateEmailField,
  updatePasswordField,
  updateFullnameField,
  takeCurrentEmail,
  takeCurrentPassword
} from '../../redux/modules/user-forms';
import { togglePopup } from '../../redux/modules/accountSettings';
import { auth } from '../../config/firebase';
import { batchProfileUpdate, takePicture } from '../../config/helpers';


const AccountSettingsContainer = ({ dispatch, currentEmail, currentPassword, emailField, passwordField, users, imageUrl, fullnameField }) => {

  const handleEmail = (event) => {
    dispatch(updateEmailField(event));
  }

  const handlePassword = (event) => {
    dispatch(updatePasswordField(event));
  }

  const handleFullname = (event) => {
    dispatch(updateFullnameField(event));
  }

  const handleImageUpload = () => {
    takePicture()
  }

  const getCurrentEmail = (event) => {
    dispatch(takeCurrentEmail(event));
  }

  const getCurrentPassword = (event) => {
    dispatch(takeCurrentPassword(event));
  }

  const showPopUp = () => {
    dispatch(togglePopup())
  }

  const updateSettings = () => {
    const options = {
      name: fullnameField,
      email: emailField,
      password: passwordField
    }
    const currentdata = {
      email: currentEmail,
      password: currentPassword
    }
    batchProfileUpdate(options, auth.currentUser, currentdata)
    dispatch(togglePopup())
  }

  return (
    <AccountSettings
      emailField={emailField}
      passwordField={passwordField}
      fullnameField={fullnameField}
      imageUrl={imageUrl}
      currentEmail={currentEmail}
      currentPassword={currentPassword}
      user={users.users[auth.currentUser.uid]}

      handleEmail={handleEmail}
      handlePassword={handlePassword}
      handleFullname={handleFullname}
      handleImageUpload={handleImageUpload}
      getCurrentEmail={getCurrentEmail}
      getCurrentPassword={getCurrentPassword}
      updateSettings={updateSettings}
      showPopUp={showPopUp}
    />
  );
}


const mapStateToProps = (state) => ({
  emailField: state.forms.emailField,
  passwordField: state.forms.passwordField,
  fullnameField: state.forms.fullnameField,
  imageUrl: state.forms.imageUrl,
  currentEmail: state.forms.currentEmail,
  currentPassword: state.forms.currentPassword,
  isVisible: state.popup.isVisible,
  users: state.users
});

AccountSettingsContainer.propTypes = {
  isVisible: PropTypes.bool,
  dispatch: PropTypes.func,
  emailField: PropTypes.string,
  passwordField: PropTypes.string,
  fullnameField: PropTypes.string,
  imageUrl: PropTypes.string,
  currentEmail: PropTypes.string,
  currentPassword: PropTypes.string,
  users: PropTypes.shape({
    users: PropTypes.shape({
      bio: PropTypes.string,
      email: PropTypes.string,
      fullName: PropTypes.string,
      goals: PropTypes.shape({
        goalOne: PropTypes.string,
        goalTwo: PropTypes.string,
        goalThree: PropTypes.string,
      }),
      imageUrl: PropTypes.string,
      socialMediaUrls: PropTypes.shape({
        facebook: PropTypes.string,
        linkedIn: PropTypes.string,
        twitter: PropTypes.string,
      }),
      speakerStats: PropTypes.arrayOf(PropTypes.shape({
        quality: PropTypes.string,
        submitAmnt: PropTypes.number,
        value: PropTypes.number
      })),
      user_id: PropTypes.string
    })
  })
};

AccountSettingsContainer.route = {
  navigationBar: {
    title: 'ACCOUNT SETTINGS',
  }
}

export default connect(mapStateToProps)(AccountSettingsContainer);