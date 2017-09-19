import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import SurveyButton from '../SurveyButton';

const EventCodeModal = ({ onButtonPress, text, textChange, value }) => {
  return (
    <View style={styles.popup}>
      <TextInput 
        style={{height: 40, width: 150, textAlign: 'center', borderColor: 'gray', borderWidth: 1}}
        onChangeText={textChange} 
        value={value}
        maxLength={4}
      />
      <Text style={styles.title}>Please enter event code</Text>
      <Text style={styles.text}>
        To submit feedback you must enter a 4 digit code, supplied by the event creator.
      </Text>
      <SurveyButton 
        onPress={onButtonPress}
        text={text}
      />
    </View>
  );
}

export default EventCodeModal;