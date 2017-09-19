import { Dimensions, StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  popup: {
    alignItems: 'center',
    backgroundColor: colors.paleYellow,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.black,
    padding: 20,
    width: Dimensions.get('window').width / 1.35
  },
  title: {
    fontFamily: typography.fontMainBold,
    fontSize: typography.robotoBold18,
    color: colors.black,
    margin: 15,
    textAlign: 'center'
  },
  text: {
    fontFamily: typography.fontMainRegular,
    fontSize: typography.norwester12,
    lineHeight: 15,
    color: colors.black,
    textAlign: 'center'
  }
});