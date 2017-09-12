import { StyleSheet } from 'react-native';
import {colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: colors.taxiYellow,
    height: 35,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: typography.titleHeading,
    fontSize: typography.norwester14,
    color: colors.black,
  },
})