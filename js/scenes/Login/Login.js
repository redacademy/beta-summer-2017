import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import OutlinedButton from '../../components/OutlinedButton';
// import Loader from '../../components/Loader';
import { auth } from '../../config/firebase';
import { colors } from '../../config/styles';
import { styles } from './styles';
import { goToLanding } from '../../navigation/navHelpers';


import bulbLogo from '../../assets/images/beta_talks_lightbulb_white.png';

const Login = ({ loginHandler, handleEmail, handlePassword, emailField, passwordField, error, isLoading }) => {
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.lgHeight} colors={[colors.lightGrey, colors.black]} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 0.4 }}>
        <View style={styles.backArrow}>
          <Icon onPress={() => goToLanding()} name='ios-arrow-back' width={100} size={36} color='white' />
        </View>
        <View style={styles.loginField}>
          <Text style={styles.headerText}>
            SIGN IN TO BETA TALKS
          </Text>
          <Image
            style={styles.bulb}
            source={bulbLogo}
          />
          <Text style={styles.subTitle}>Please enter your...</Text>
          <TextInput
            autoCapitalize='none'
            style={styles.input}
            onChangeText={handleEmail}
            value={emailField}
            placeholder='Email'
          />
          <TextInput
            style={styles.input}
            onChangeText={handlePassword}
            value={passwordField}
            placeholder='Password'
            secureTextEntry={true}
          />
          <OutlinedButton
            style={styles.bodyText}
            onPress={() => loginHandler()}
            text={'log in'}
            isLoading={isLoading}
          >

          </OutlinedButton>
          {console.log(auth.currentUser)}
        </View>
      </LinearGradient>
    </View>
  )
}

Login.propTypes = {
  emailField: PropTypes.string,
  passwordField: PropTypes.string,
  handleEmail: PropTypes.func,
  handlePassword: PropTypes.func,
  loginHandler: PropTypes.func

};

export default Login;
