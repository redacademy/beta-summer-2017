import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export const styles = StyleSheet.create({
  dot: {
    backgroundColor: colors.lightestGrey, 
    width: 8, 
    height: 8, 
    borderRadius: 4, 
    marginLeft: 3, 
    marginRight: 3, 
    marginTop: 3, 
    marginBottom: 3
  }
});
