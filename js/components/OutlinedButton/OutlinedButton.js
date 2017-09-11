import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import { styles } from './styles';


const OutlinedButton = ({ onPress, text }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OutlinedButton;

