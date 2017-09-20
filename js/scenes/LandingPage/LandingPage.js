import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  Linking,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { goToLogin, goToSingup } from '../../navigation/navHelpers';

import { colors } from '../../config/styles';
import { styles } from './styles';
import logo_white from '../../assets/images/beta_talks_logo_white.png';

import OutlinedButton from '../../components/OutlinedButton';

export default () => (
  <View style={styles.landingWrapper}>
    <LinearGradient
      style={{
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        alignItems: 'center'
      }}
      colors={[colors.lightGrey, colors.black]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 0.4 }}
    >
      <Image
        style={styles.landingLogo}
        source={logo_white}
      />
      <View style={styles.landingSubWrapper}>
        <OutlinedButton
          text={'Log In'}
          onPress={() => goToLogin('landing')}
        />
        <Text
          style={styles.linkText}
          onPress={() => goToSingup('landing')}
        >sign up here</Text>
        <Text style={styles.linkSubText} onPress={() => Linking.openURL('http://soapboxspeakers.com')} >soapboxspeakers.com</Text>
      </View>
    </LinearGradient>
  </View>
)
