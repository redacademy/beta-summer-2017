import { Dimensions, StyleSheet } from 'react-native'
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: Dimensions.get('window').width / 1.75,
    height: 22.5,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: colors.black,
    backgroundColor: colors.taxiYellow,
    marginBottom: 3,
    alignSelf: 'center'
  },
  textContainer: {
    position: 'absolute',
    width: Dimensions.get('window').width / 1.75,
    zIndex: 2,
    backgroundColor: 'transparent',
    alignSelf: 'center'
  },
  overlay: {
    textAlign: 'center',
    fontFamily: typography.fontMainRegular,
    fontSize: typography.norwester10,
    color: colors.lightGrey
  },
  complete: {
  },
  incomplete: {
    backgroundColor: colors.white,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  }
});
