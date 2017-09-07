import React from 'react';
import {
  ActivityIndicator
} from 'react-native';
import { styles } from './styles';

const Loader = () => {
  return (
    <ActivityIndicator animating={true} size="small" color="black" style={styles.activityIndicator}/>
  );
}

export default Loader;