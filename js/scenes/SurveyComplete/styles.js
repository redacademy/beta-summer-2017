import { Dimensions, StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  sceneContainer: {
    flex: 1,
    flexDirection: 'column',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  background: {
    backgroundColor: colors.offWhite,
    height: Dimensions.get('window').height / 1.25,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  contentContainer: {
    alignItems: 'center',
    backgroundColor: colors.paleYellow,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.black,
    padding: 20,
    width: Dimensions.get('window').width / 1.35
  },
  buttonContainer: {
    margin: 5
  },
  title: {
    fontFamily: typography.fontMainBold,
    fontSize: typography.robotoBold18,
    color: colors.black,
    margin: 15,
    textAlign: 'center'
  },
  text: {
    fontFamily: typography.fontMainBold,
    fontSize: typography.norwester12,
    lineHeight: 15,
    color: colors.black,
    textAlign: 'center',
    marginBottom: 20
  }
});