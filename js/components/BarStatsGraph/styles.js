import { Dimensions, StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  skillsHeader: {
    fontFamily: typography.fontMainBold,
    fontSize: typography.norwester18,
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginBottom: 10,
    marginTop: 10
  },
  graphContainer: {
    height: Dimensions.get('window').height / 1.75,
    width: Dimensions.get('window').width / 1.35,
    borderColor: colors.white,
    borderLeftWidth: 2.5,
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  }
});