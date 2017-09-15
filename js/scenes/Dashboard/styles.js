import { Dimensions, StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  sceneContainer: {
    flex: 1,
    flexDirection: 'column',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  contentContainer: {
    justifyContent: "space-around",
    alignItems: 'center',
    height: Dimensions.get('window').height / 1.25,
    width: Dimensions.get('window').width
  },
  skillsHeader: {
    fontFamily: typography.fontMainBold,
    fontSize: typography.norwester18,
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginBottom: 10
  },
  graphBarContainer: {
    height: Dimensions.get('window').height / 1.75,
    width: Dimensions.get('window').width / 1.2,
    borderColor: colors.white,
    borderLeftWidth: 2.5,
    justifyContent: 'space-around'
  },
  graphBarBorder: {
    borderColor: colors.black,
    borderLeftWidth: 0,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    backgroundColor: 'transparent',
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    height: 25,
    justifyContent: 'center'
  },
  graphBarText: {
    marginLeft: 8,
    color: colors.white
  }
});
