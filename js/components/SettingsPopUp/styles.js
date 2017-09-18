import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  modal: {
    height: '60%',
    width: '85%',
    backgroundColor: colors.paleYellow,
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.black,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  modalHeader: {
    fontFamily: typography.fontMainBold,
    fontSize: typography.robotoBold20
  },
  modalText: {
    fontFamily: typography.fontMainBold,
    fontSize: typography.robotoBold14,
    textAlign: 'center'    
  },
  input: {
    fontFamily: typography.fontMain,
    color: colors.darkGrey,
    fontSize: typography.robotoRegular14,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.lightestGrey,
    backgroundColor: colors.white,
    width: '95%',
    height: 35,
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
  button: {
    width: '40%',
    height: 30,
    borderRadius: 10,
    backgroundColor: colors.taxiYellow,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  buttonLabel: {
    fontFamily: typography.titleHeading,
    fontSize: typography.norwester12
  }
})