import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const SurveyPopUp = ({ title, text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.popup}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

export default SurveyPopUp;