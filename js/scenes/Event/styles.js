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
    //flex: 1,
    //alignItems: 'center',
    width: Dimensions.get('window').width,
  },

  talkContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: 'red',
    borderWidth: 2,
    right: 30,
    width: Dimensions.get('window').width,
  },

  talkBorder: {
    backgroundColor: colors.darkGrey,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    minHeight: 50,
    width: Dimensions.get('window').width / 1.1,
    alignSelf: 'flex-end',
    marginTop: 2.5,
    marginBottom: 2.5,
    borderColor: 'green',
    borderWidth: 2
  },

  talkDetails: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    borderColor: 'yellow',
    borderWidth: 2,
    maxWidth: Dimensions.get('window').width / 1.55
  },

  talkTitleContainer: {
    flexWrap: 'wrap'
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
    margin: 10
  }
  
});