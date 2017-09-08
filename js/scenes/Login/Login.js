import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  Image,
  Button,
  Linking
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
// import { styles } from './styles';


import { colors, typography } from '../../config/styles';

// import { bulb } from '../../assets/images/lightbulb.svg';

const Login = () => {
  return (
    //TODO: background gradient
    <View style={styles.container}>
      <LinearGradient style={styles.lgHeight} colors={[colors.lightGrey, colors.black]} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 0.4 }}>
        <View style={styles.loginField}>
          <Text style={styles.headerText}>
            SIGN IN TO BETA TALKS
          </Text>
          <Image
            style={styles.bulb}
            source={require('../../assets/images/beta_talks_lightbulb_white.png')}
          />
          <Text style={styles.bodyText}>Please enter your...</Text>
          <TextInput
            style={styles.input}
            placeholder='Email Address'
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
          />
          <Text style={styles.text}>
            This will be the button
          </Text>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    
  },
  lgHeight: {
    height: Dimensions.get('window').height,
  },
  loginField: {
    flex: 1,

    alignContent: 'center',
    alignItems: 'center',
  },
  bulb: {
    width: 75,
    height: 120,
    marginBottom: 15,
  },
  headerText: {
    color: 'white',
    backgroundColor: 'transparent',
    fontFamily: typography.titleHeading,
    fontSize: typography.norwester36,
    marginTop: 60,
    paddingBottom: 20,
    width: '50%',
    textAlign: 'center',
  },
  bodyText: {
    color: 'white',
    backgroundColor: 'transparent',
    fontFamily: typography.fontMainRegular,
    fontSize: typography.robotoRegular18
  },
  input: {
    fontFamily: typography.fontMain,
    color: colors.darkGrey,
    fontSize: typography.robotoBold14,
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.lightestGrey,
    borderRadius: 8,
    backgroundColor: colors.white,
    width: '80%',
    height: 35,
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default Login;