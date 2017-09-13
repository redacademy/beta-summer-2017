import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey
  },

  eventContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 20
  },

  eventDate: {
    fontFamily: typography.titleHeading,
    fontSize: typography.norwester20
  },

  eventTime: {
    fontFamily: typography.fontMainBold,
    fontSize: typography.robotoRegular18
  },

  talkContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },

  talkBorder: {
    backgroundColor: colors.darkGrey,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    marginLeft: 30,
    height: 90,
    width: '100%'
  },

  talkDetails: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: 25,
    left: 90,
    backgroundColor: 'transparent'
  },

  talkTitle: {
    fontFamily: typography.fontMainBold,
    fontSize: typography.robotoRegular14,
    color: colors.white,
    margin: 5
  },
  
  speaker: {
    fontFamily: typography.fontMainRegular,
    fontSize: typography.robotoRegular14,
    color: colors.white,
    margin: 5
  },

  image: {
    height: 70,
    width: 70,
    borderRadius: 10,
    margin: 10,
    position: 'absolute',
    bottom: 0
  }
});