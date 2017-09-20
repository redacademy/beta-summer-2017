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
  },
  skillsHeader: {
    fontFamily: typography.fontMainBold,
    fontSize: typography.norwester18,
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginBottom: 10,
    marginTop: 10
  },
});

export const commentStyles = StyleSheet.create({
  commentBarRight: {
    backgroundColor: colors.darkGrey,
    flexDirection: 'row',
    width: Dimensions.get('window').width / 1.15,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: 15,
    marginBottom: 15,
    minHeight: 125
  },
  commentBarLeft: {
    backgroundColor: colors.darkGrey,
    flexDirection: 'row-reverse',
    width: Dimensions.get('window').width / 1.15,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 10,
    marginBottom: 10,
    minHeight: 125
  },
  commentContainer: {
    justifyContent: 'center',
    width: Dimensions.get('window').width / 1.75,
    padding: 20
  },
  commentText: {
    color: colors.white,
    fontSize: typography.norwester12,
    fontFamily: typography.fontMainRegular,
    marginBottom: 10
  },
  commenterName: {
    color: colors.white,
    fontSize: typography.norwester12
  },
  commenterAvatar: {
    width: 75,
    height: 75,
    borderRadius: 5
  },
  imgRight: {
    marginLeft: 10,
    marginRight: -10
  },
  imgLeft: {
    marginRight: 10,
    marginLeft: -10
  }
});

