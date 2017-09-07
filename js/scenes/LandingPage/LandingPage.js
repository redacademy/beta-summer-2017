import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  Button,
  Linking
} from 'react-native';
import { styles } from './styles';

const LandingPage = () => {
  return (
    //TODO: background gradient
    <View style={styles.landingWrapper}>
      <Image
        style={styles.landingLogo}
        source={require('../../assets/images/beta_talks_logo_white.png')}
      />
      <View style={styles.landingSubWrapper}>
        <Text style={{color: 'white'}}>Log in button goes here.</Text>
        <Text style={styles.linkText} onPress={() => Linking.openURL('http://google.com')} >sign up here</Text>
        <Text style={styles.linkSubText}>soapboxspeakers.com</Text>
      </View>
    </View>
  )
}

export default LandingPage;