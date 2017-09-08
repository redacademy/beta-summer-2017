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
    width: 75,
    height: 120,
    marginBottom: 15,
  },
  headerText: {
    color: 'white',
    backgroundColor: 'transparent',
    fontFamily: typography.titleHeading,
    fontSize: typography.norwester36,
    marginTop: 60,
    paddingBottom: 20,
    width: '50%',
    textAlign: 'center',
  },
  bodyText: {
    color: 'white',
    backgroundColor: 'transparent',
    fontFamily: typography.fontMainRegular,
    fontSize: typography.robotoRegular18
  },
  input: {
    fontFamily: typography.fontMain,
    color: colors.darkGrey,
    fontSize: typography.robotoRegular14,
    marginTop: 15,
    marginBottom: 15,
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