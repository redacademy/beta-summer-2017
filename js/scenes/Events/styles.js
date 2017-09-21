import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
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
    backgroundColor: colors.white
  },
  filterSelected: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 25,
    width: 60,
    backgroundColor: colors.taxiYellow
  },
  filterText: {
    fontFamily: typography.titleHeading,
    fontSize: 11
  },
  eventsListWrapper: {
    height: '100%',
    justifyContent: 'space-between',
  },
  eventsListItem: {
    backgroundColor: colors.darkGrey,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    //height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width / 1.05,
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
  scrollView: {
    marginBottom: 100
  },
  attendeeContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 100,
    height: 50
  },
  attendeeImage: {
    width: 20,
    height: 20,
    margin: 2,
    borderRadius: 4
  }
});