import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { colors, typography } from '../../config/styles';
import { styles } from './styles';

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

export default Login;
