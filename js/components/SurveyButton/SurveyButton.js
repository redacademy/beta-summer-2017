import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';

const SurveyButton = ({ cStyle, onPress, text }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[cStyle, styles.buttonContainer]} 
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SurveyButton;