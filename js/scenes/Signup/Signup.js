import React from 'react';
import { TextInput, View, Text, Image, Linking } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import OutlinedButton from '../../components/OutlinedButton/';
import { colors } from '../../config/styles';
import { styles } from './styles';

const Signup = ({ signupHandler, handleEmail, handlePassword, handleFullname, emailField, passwordField, fullnameField }) => {

  return (
    <View style={styles.container}>
      <LinearGradient style={styles.lgHeight} colors={[colors.lightGrey, colors.black]} start={{ x: 1, y: 0.1 }} end={{ x: 1, y: 0.4 }}>
        <View style={styles.signupField}>
          <Text style={styles.title}>create your beta talks account</Text>
          <Image
            style={styles.bulb}
            source={require('../../assets/images/beta_talks_lightbulb_white.png')}
          />
          <Text style={styles.subTitle}>Please enter your...</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleFullname}
            value={fullnameField}
            placeholder="Fullname"
          />
          <TextInput
            style={styles.input}
            onChangeText={handleEmail}
            value={emailField}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            onChangeText={handlePassword}
            value={passwordField}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            placeholder="Password"
          />
          <OutlinedButton
            text="create account"
            onPress={() => signupHandler()}
          />
          <Text
            style={styles.subTitle}
            onPress={() => Linking.openURL('http://soapboxspeakers.com')}
          >soapboxspeakers.com</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

Signup.propTypes = {
  emailField: PropTypes.string.isRequired,
  passwordField: PropTypes.string.isRequired,
  fullnameField: PropTypes.string.isRequired,
  handleEmail: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
  handleFullname: PropTypes.func.isRequired,
  signupHandler: PropTypes.func.isRequired
};

export default Signup;