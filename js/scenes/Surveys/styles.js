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
    justifyContent: 'space-between',
  },
  targetIconContainer: {
    width: 55, 
    height: 55, 
    alignSelf: 'flex-end',
    justifyContent: 'center'
  },
  targetIcon: {
    alignSelf: 'center',
    width: 35,
    height: 35
  },
  titleQuestion: {
    alignSelf: 'center',
    fontFamily: typography.fontMainBold,
    fontSize: typography.norwester18,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  questionsContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    height: Dimensions.get('window').height / 2.75
  },
  questionsText: {
    fontSize: typography.norwester14,
    marginRight: 10
  },
  questionsTextWSub: {
    fontFamily: typography.fontMainBold,
    fontSize: typography.norwester14,
    marginRight: 10
  },
  questionSubtext: {
    fontFamily: typography.fontMainRegular,
    fontSize: typography.norwester10,
    color: colors.mediumGrey,
    marginRight: 15
  },
  progressContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12.5
  },
  commentBox: {
    borderColor: colors.mediumGrey,
    backgroundColor: colors.white,
    borderWidth: 1,
    height: Dimensions.get('window').height / 2.75,
    width: Dimensions.get('window').width / 1.25,
    margin: 10,
    padding: 5,
    fontSize: typography.norwester12,
    fontFamily: typography.fontMainRegular
  }
});