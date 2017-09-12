import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  eventsWrapper: {
    backgroundColor: colors.mediumGrey,
    flex: 2,
    padding: 5
  },
  eventsHeader: {
    height:70,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20
  },
  eventsFilterButton: {
    backgroundColor: 'white',
    width: 60,
    height: 20,
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  eventsFilterText: {
    fontFamily: typography.titleHeading,
    fontSize: typography.norwester12
  },
  eventsListWrapper: {
    flexDirection: 'column'
  },
  eventsListItem: {
    backgroundColor: colors.darkGrey,
    height: 75,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5
  },
  eventItemDate: {
    color: colors.white,
    fontFamily: typography.fontMainBold,
    fontSize: typography.robotoBold12
  },
  eventItemTime: {
    color: colors.white,
    fontFamily: typography.fontMainRegular,
    fontSize: typography.robotoRegular10,
  },
  eventTimeWrapper: {
    width: '65%',
    padding: 10
  },
  eventSpeakerWrapper: {
    width: '35%',
  }
})