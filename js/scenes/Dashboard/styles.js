import { Dimensions, StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  buttonText: {
    color: colors.taxiYellow,
    fontSize: 45
  },
  sceneContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  contentContainer: {
    justifyContent: "space-between",
    alignItems: 'center',
    width: Dimensions.get('window').width
  }
});

export const talkStyles = StyleSheet.create({
  talksContainer: {
    justifyContent: "space-around",
    alignItems: 'flex-end',
    width: Dimensions.get('window').width
  },
  talkBar: {
    backgroundColor: colors.darkGrey,
    flexDirection: 'row',
    width: Dimensions.get('window').width / 1.2,
    height: 90,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "flex-end",
    marginBottom: 12.5,
    marginTop: 12.5
  },
  scoreHolder: {
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: colors.taxiYellow,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    right: 30,
  },
  score: {
    color: colors.white,
    fontFamily: typography.titleHeading,
    fontSize: typography.norwester36
  },
  talkInfoContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: "center",
  },
  infoTextContainer: {
    height: 70,
    justifyContent: 'center',
    width: Dimensions.get('window').width / 1.6,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    right: 30,
    marginLeft: 10
  },
  talkTitle: {
    color: colors.white,
    fontSize: typography.norwester12,
    fontFamily: typography.fontMainBold,
    marginBottom: 10
  },
  speakerName: {
    color: colors.white,
    fontSize: typography.norwester12
  }
});
