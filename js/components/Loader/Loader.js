import React from 'react';
import {
  ActivityIndicator
} from 'react-native';
import { styles } from './styles';

const Loader = ({color = 'black'}) => {
  return (
    <ActivityIndicator animating={true} size="small" color={color} style={styles.activityIndicator}/>
  );
}

export default Loader;