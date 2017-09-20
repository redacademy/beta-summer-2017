import { Dimensions, StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  graphBarBorder: {
    flexDirection: 'row',
    width: Dimensions.get('window').width / 1.35,
    borderColor: colors.black,
    borderLeftWidth: 0,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    backgroundColor: 'transparent',
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    height: 22.5,
    justifyContent: 'center'
  },
  graphBarText: {
    marginLeft: 8,
    marginBottom: 4,
    backgroundColor: 'transparent',
    color: colors.white,
    fontFamily: typography.fontMainRegular,
    fontSize: typography.norwester12,
  },
  complete: {
    backgroundColor: colors.taxiYellow
  },
  incomplete: {
    backgroundColor: 'transparent',
  }
});