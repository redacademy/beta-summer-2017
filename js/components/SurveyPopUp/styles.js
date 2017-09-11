import { Dimensions, StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: colors.white
  },

  popup: {
    alignItems: 'center',
    backgroundColor: colors.paleYellow,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.black,
    padding: 20,
    width: '75%',
    height: '55%'
  },

  title: {
    fontFamily: typography.fontMainBold,
    fontSize: typography.robotoBold18,
    color: colors.black,
    margin: 15,
    textAlign: 'center'
  },

  text: {
    fontFamily: typography.fontMainBold,
    fontSize: typography.robotoRegular12,
    color: colors.black,
    textAlign: 'center'
  }
});