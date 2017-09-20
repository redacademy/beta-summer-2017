import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.paleYellow
  },
  hopeDisWerks: {
    flexDirection: 'row',

  },
  imageContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 25
  },

  image: {
    width: 75,
    height: 75,
    borderWidth: 3,
    borderColor: colors.darkGrey,
    marginTop: 30,
    marginLeft: 20
  },

  pencil: {
    width: 20,
    height: 20
  },

  headings: {
    fontFamily: typography.fontMainBold,
    fontSize: typography.robotoBold14,
    color: colors.darkGrey,
    marginLeft: 50
  },

  inputSmall: {
    fontFamily: typography.fontMain,
    fontSize: typography.robotoRegular14,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: colors.darkGrey,
    backgroundColor: colors.white,
    width: '70%',
    height: 35,
    marginTop: 5,
    marginBottom: 20
  },

  fieldsContainer: {
    justifyContent: 'center',
    flexDirection: 'row'
  },

  button: {
    marginTop: 20
  }
});