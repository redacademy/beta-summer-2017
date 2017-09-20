import {
  StyleSheet,
  Dimensions
} from 'react-native';

import {
  colors,
  typography
} from '../../config/styles';

export const styles = StyleSheet.create({
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
    width: 60,
    height: 100,
    marginTop: 20,
    marginBottom: 20
  },
  headerText: {
    color: colors.white,
    backgroundColor: 'transparent',
    fontFamily: typography.titleHeading,
    fontSize: typography.norwester27,
    marginTop: 35,
    width: '50%',
    textAlign: 'center',
  },
  subTitle: {
    color: colors.white,
    fontFamily: typography.fontMain,
    fontSize: typography.robotoRegular16,
    marginTop: 5,
    marginBottom: 5
  },
  input: {
    fontFamily: typography.fontMain,
    color: colors.darkGrey,
    fontSize: typography.robotoRegular14,
    marginTop: 10,
    marginBottom: 10,
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