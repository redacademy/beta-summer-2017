import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import { styles } from './styles';


const OutlinedButton = ({ onPress, text, children, isLoading = true }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
       <Text style={styles.buttonText}>{text}</Text>
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default OutlinedButton;

