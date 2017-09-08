import { Dimensions, StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  sceneContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-around",
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  contentContainer: {
    justifyContent: "space-around",
    height: Dimensions.get('window').height / 1.25,
    width: Dimensions.get('window').width
  },
  eventHeaderBar: {
    backgroundColor: colors.darkGrey,
    flexDirection: 'row',
    width: Dimensions.get('window').width / 1.2,
    height: 110,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    padding: 20
  },
  dateContainer: {
    position: 'relative',
    right: Dimensions.get('window').width / 7,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
  },
  nextEvent: {
    color: colors.white,
    fontSize: typography.norwester16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  eventDate: {
    color: colors.white,
    fontSize: typography.norwester12
  },
  dateHolder: {
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: colors.taxiYellow,
    width: 80,
    height: 80,
    marginRight: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  eventDay: {
    color: colors.white,
    fontFamily: typography.titleHeading,
    fontSize: typography.norwester48,
    marginBottom: -10
  },
  eventMonth: {
    color: colors.white,
    fontFamily: typography.fontMainRegular,
    fontSize: typography.norwester27
  },
  attendContainer: {
    alignSelf: 'center',
    width: Dimensions.get('window').width / 1.55,
    height: Dimensions.get('window').height / 3.15,
  },
  attendHeader: {
    color: colors.white,
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
    fontFamily: typography.fontMainRegular,
    fontSize: typography.norwester16,
    fontWeight: 'bold',
    marginLeft: 3,
  },
  attendeeScrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5
  },
  attendeeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginRight: 0,
    marginLeft: 5,
    marginBottom: 0,
    //width: Dimensions.get('window').width / 3.25,
  },
  attendeeName: {
    //width: 52.5,
    backgroundColor: 'transparent',
    flexWrap: 'wrap',
    fontSize: typography.norwester14,
    marginLeft: 5,
    color: colors.white
  },
  attendeePhoto: {
    width: 50,
    height: 50,
    borderRadius: 10
  },
  locationContainer: {
    backgroundColor: 'transparent',
    alignSelf: 'center'
  },
  locationText: {
    fontSize: typography.norwester12,
    color: colors.white
  }
});
