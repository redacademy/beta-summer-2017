import { Dimensions, StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
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
    fontSize: typography.robotoRegular18,
    backgroundColor: 'transparent'
  },

  contentContainer: {
    justifyContent: "flex-start",
    width: Dimensions.get('window').width,
  },

  talkContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 10,
    right: 30,
    height: 70,
    width: Dimensions.get('window').width,
  },

  talkBorder: {
    backgroundColor: colors.darkGrey,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    height: 80,
    alignItems: 'center',
    width: Dimensions.get('window').width / 1.1,
    alignSelf: 'flex-end',
    marginTop: 2.5,
    marginBottom: 2.5
  },

  talkDetails: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    maxWidth: Dimensions.get('window').width / 1.35
  },

  talkTitleContainer: {
    flexWrap: 'wrap'
  },

  talkTitle: {
    fontFamily: typography.fontMainBold,
    fontSize: typography.robotoRegular12,
    color: colors.white,
    margin: 5
  },

  speaker: {
    fontFamily: typography.fontMainRegular,
    fontSize: typography.robotoRegular12,
    color: colors.white,
    margin: 5
  },

  image: {
    height: 60,
    width: 60,
    borderRadius: 10,
    margin: 10
  }
  
});