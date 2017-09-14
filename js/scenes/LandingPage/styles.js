import { StyleSheet } from 'react-native';

import {colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  landingLogo: {
    flexDirection: 'row',
    height: 118,
    width: 280,
    marginTop: 150
  },
  landingWrapper: {
    backgroundColor: '#000',
    ...StyleSheet.absoluteFillObject,
    display: 'flex',
    justifyContent: 'center',
  },
  landingSubWrapper: {
    marginTop: 75,
    alignItems: 'center',
  },
  linkText: {
    textDecorationLine: 'underline',
    color: colors.white,
    marginTop: 25,
    fontSize: 18
  },
  linkSubText: {
    textDecorationLine: 'underline',
    color: '#FFF',
    marginTop: 25,    
  }
})