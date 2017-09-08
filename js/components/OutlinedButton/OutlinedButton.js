import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import { styles } from './styles';


const OutlineButtons = ({ buttonAction, text }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={buttonAction}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OutlineButtons;

