import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';

const SurveyButton = ({ onPress, text }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SurveyButton;