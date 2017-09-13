import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  eventsWrapper: {
    flex: 2,
  },
  eventsHeaderWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    height: 75
  },
  eventsFilter: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 25,
    width: 60,
    backgroundColor: 'white'
  },
  filterText: {
    fontFamily: typography.titleHeading,
    fontSize: typography.norwester12
  },
  eventsListWrapper: {
    justifyContent: 'space-between'
  },
  eventsListItem: {
    backgroundColor: colors.darkGrey,
    margin: 10,
    padding: 15,
    borderRadius: 10,
    height: 75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  eventsListItemInfo: {
    width: '65%',
    flexDirection: 'column'
  },
  eventListItemSpeakers: {
    width: '35%'
  },
  eventDate: {
    fontFamily: typography.fontMainBold,
    fontSize: typography.robotoBold12,
    color: colors.white
  },
  eventTime: {
    fontFamily: typography.fontMainRegular,
    fontSize: typography.robotoRegular10,
    color: colors.white
  },
  eventsListItemSpeakers: {

  }
});