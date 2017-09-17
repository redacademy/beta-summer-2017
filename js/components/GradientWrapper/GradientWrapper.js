import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import {colors} from '../../config/styles';

const GradientWrapper = ({ children }) => (
  <LinearGradient
    style={styles.lgHeight}
    colors={[colors.lightGrey, colors.darkGrey]}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 0.8 }}
  >
    {children}
  </LinearGradient>
)
export default GradientWrapper;