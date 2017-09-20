import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const SurveyWarningModal = ({ text }) => {
  return (
    <View style={styles.popup}>
      <Text style={styles.title}>Warning</Text>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  );
}

export default SurveyWarningModal;