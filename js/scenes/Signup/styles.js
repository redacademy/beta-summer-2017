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
    width: 60,
    height: 100,
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
    height: 30,
    marginTop: 8,
    marginBottom: 8
  },

  title: {
    color: colors.white,
    fontFamily: typography.titleHeading,
    fontSize: typography.norwester24,
    marginTop: 35,
    width: '70%',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  subTitle: {
    color: colors.white,
    fontFamily: typography.fontMain,
    fontSize: typography.robotoRegular16,
    marginTop: 5,
    marginBottom: 5
  }
});