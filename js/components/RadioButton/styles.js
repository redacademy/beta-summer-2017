import { StyleSheet } from 'react-native'
import { colors } from '../../config/styles';

const defaultProps = {
  size: 20,
  borderWidth: 4,
  selectedColor: colors.taxiYellow,
  unselectedColor: colors.lightestGrey,
  borderColor: colors.black
};

const {
  size,
  borderWidth,
  borderColor,
  selectedColor,
  unselectedColor
} = defaultProps;

export const styles = StyleSheet.create({
  radio: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerStyle: {
    width: size - borderWidth,
    height: size - borderWidth,
    borderRadius: size / 2,
    backgroundColor: selectedColor
  },
  outerStyle: {
    borderColor: borderColor,
    backgroundColor: unselectedColor,
    width: size + borderWidth,
    height: size + borderWidth,
    borderRadius: size * 2,
    borderWidth: borderWidth
  },
  buttonLabel: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 10
  }
});