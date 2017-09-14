import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  modal: {
    height: 200,
    width: 150,
    backgroundColor: colors.darkGrey,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    position: 'absolute',
    right: 0,
    bottom: 45,
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 5
  },
  popUpText: {
    color: colors.taxiYellow,
    fontFamily: typography.fontMainBold,
    fontSize: typography.robotoBold12
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  menuIcon: {
    height: 30,
    width: 30,
    marginRight: 10
  },
  itemWrapper: {
    display: 'flex',
    flexDirection: 'row',
  }
})