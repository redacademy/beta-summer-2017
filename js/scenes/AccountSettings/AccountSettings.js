import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SurveyButton from '../../components/SurveyButton/';
import accountIcon from '../../assets/icons/account_icon.png'
import pencil from '../../assets/icons/pencil.png';
import { styles } from './styles';
import SettingsPopUp from '../../components/SettingsPopUp/';

const AccountSettings = ({ updateSettings, currentEmail, currentPassword, getCurrentEmail, getCurrentPassword, isVisible, user, showPopUp, handleImageUpload, imageUrl, handleEmail, emailField, handlePassword, passwordField, handleFullname, fullnameField }) => {
  const getImage = imageUrl || user.imageUrl
  return (
    <ScrollView style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => handleImageUpload()}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={getImage ? { uri: getImage } : accountIcon}
            />
            <Image
              style={styles.pencil}
              source={pencil}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.headings}>Fullname</Text>
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.inputSmall}
            onChangeText={(text) => handleFullname(text)}
            value={fullnameField}
            autoCorrect={false}
            placeholder={user.fullName}
          />
        </View>

        <Text style={styles.headings}>Email</Text>
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.inputSmall}
            onChangeText={(text) => handleEmail(text)}
            autoCapitalize="none"
            autoCorrect={false}
            value={emailField}
            placeholder={user.email}
          />
        </View>

        <Text style={styles.headings}>Password</Text>
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.inputSmall}
            onChangeText={handlePassword}
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize="none"
            value={passwordField}
            placeholder={user.password}
          />
        </View>
        {(fullnameField || emailField || passwordField) ?
          <SurveyButton
            text="save settings"
            onPress={() => showPopUp()}
          />
          : null}
      </View>
      <SettingsPopUp
        isVisible={isVisible}
        currentEmail={currentEmail}
        currentPassword={currentPassword}
        getCurrentEmail={getCurrentEmail}
        getCurrentPassword={getCurrentPassword}
        updateSettings={updateSettings}
      />
    </ScrollView>
  )
}

const mapStateToProps = (state) => ({
  isVisible: state.popup.isVisible
});

AccountSettings.propTypes = {
  updateSettings: PropTypes.func.isRequired,
  currentEmail: PropTypes.string,
  currentPassword: PropTypes.string,
  getCurrentEmail: PropTypes.func.isRequired,
  getCurrentPassword: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
  showPopUp: PropTypes.func.isRequired,
  handleImageUpload: PropTypes.func.isRequired,
  imageUrl: PropTypes.string,
  handleEmail: PropTypes.func.isRequired,
  emailField: PropTypes.string,
  handlePassword: PropTypes.func.isRequired,
  passwordField: PropTypes.string,
  fullnameField: PropTypes.string,
  handleFullname: PropTypes.func.isRequired,
  user: PropTypes.shape({
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
}

export default connect(mapStateToProps)(AccountSettings);