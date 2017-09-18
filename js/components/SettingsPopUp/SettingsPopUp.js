import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { togglePopup } from '../../redux/modules/accountSettings';
import { styles } from './styles';


const SettingsPopUp = ({ dispatch, isVisible, currentEmail, currentPassword, getCurrentEmail, getCurrentPassword, updateSettings }) => {

  return (
    <View>
      <Modal
        isVisible={isVisible}
      >
        <View style={styles.modal}>
          <Text style={styles.modalHeader}>Verification</Text>
          <Text style={styles.modalText}>Please verify your account changes using your existing email and password</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(text) => getCurrentEmail(text)}
            value={currentEmail}
            placeholder='Email'
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(text) => getCurrentPassword(text)}
            value={currentPassword}
            placeholder='Password'
            secureTextEntry={true}
          />
          <View style={styles.buttonWrapper}>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={updateSettings}
              >
                <Text style={styles.buttonLabel}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() =>  dispatch(togglePopup())}
              >
                <Text style={styles.buttonLabel}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const mapStateToProps = (state) => ({
  isVisible: state.popup.isVisible
});

SettingsPopUp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  currentEmail: PropTypes.string,
  currentPassword: PropTypes.string,
  getCurrentEmail: PropTypes.func.isRequired,
  getCurrentPassword: PropTypes.func.isRequired,
  updateSettings: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(SettingsPopUp);