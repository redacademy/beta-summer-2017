import {
  StyleSheet,
} from 'react-native';

import {colors, typography} from '../../config/styles';

export const cStyles = StyleSheet.create({
  speakerHeader: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    height: 100,
  },
  quoteContainer: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerQuote: {
    color: colors.taxiYellow,
    fontFamily: typography.titleHeading,
    fontSize: typography.norwester36,
    fontWeight: 'bold',
    display: 'flex',
    alignContent: 'center',
  },
  titleText: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: colors.black,
    fontFamily: typography.fontMainBold,
    fontSize: typography.robotoBold20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  speakerContent: {
    flex: 1,
    left: -20,
  },
  socialMedia: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 50,
  },
  speakerName: {
    fontFamily: typography.fontMainBold,
    fontSize: typography.robotoBold18,
    color: colors.white,
  },
  speakerBio: {
    fontFamily: typography.fontMainRegular,
    fontSize: typography.robotoBold12,
    color: colors.white,
    paddingTop: 5,
    paddingBottom: 5,
  },
  speakerIcons: {
    color: colors.white,
    fontSize: typography.robotoRegular18,
  },
  goalsContainer: {
    maxHeight: 110,
    backgroundColor: colors.darkGrey,
    width: 250,
    alignSelf: 'flex-end',
    paddingTop: 10,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20
  },
  goalItem: {
    marginLeft: 15,
    fontFamily: typography.fontMainRegular,
    fontSize: typography.norwester16,
    color: colors.white,
    paddingBottom: 10,
  },
  feedbackButton: {
    marginTop: 10,
  },
})