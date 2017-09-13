import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  popUpWrapper: {
    height: 200,
    width: 150,
    backgroundColor: colors.darkGrey,
    borderRadius: 20,
    position: 'absolute',
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15
  },
  popUpText: {
    color: colors.taxiYellow,
    fontFamily: typography.fontMainBold,
    fontSize: typography.robotoBold12
  }
})