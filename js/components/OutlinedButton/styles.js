import { StyleSheet } from 'react-native';
import {colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonContainer: {
    borderWidth: 2,
    borderColor: colors.taxiYellow,
    height: 50,
    width: 165,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 10
  },
  buttonText: {
    fontFamily: typography.titleHeading,
    fontSize: typography.norwester16,
    color: colors.white,
  },
})