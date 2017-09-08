import { StyleSheet } from 'react-native';
import {colors, typography } from '../../config/styles';



export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // marginTop: 20,
    // marginBottom: 20,
  },
  buttonContainer: {
    borderWidth: 2,
    borderColor: colors.taxiYellow,
    height: 65,
    width: 200,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  buttonText: {
    fontFamily: typography.titleHeading,
    fontSize: typography.norwester24,
    color: colors.white,
  },
})