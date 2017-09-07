import { Dimensions, StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },

  lgHeight: {
    height: Dimensions.get('window').height
  },

  signupField: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },

  bulb: {
    width: 65,
    height: 110,
    marginTop: 20,
    marginBottom: 20
  },

  input: {
    fontFamily: typography.fontMain,
    fontSize: typography.robotoRegular14,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: colors.lightestGrey,
    borderRadius: 8,
    backgroundColor: colors.white,
    width: '80%',
    height: 35,
    marginTop: 10,
    marginBottom: 10
  },

  title: {
    color: colors.white,
    fontFamily: typography.titleHeading,
    fontSize: typography.norwester36,
    marginTop: 30,
    width: '90%',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  subTitle: {
    color: colors.white,
    fontFamily: typography.fontMain,
    fontSize: typography.robotoRegular18
  }
});