import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { colors } from '../../config/styles';
import { styles } from './styles';
import SurveyButton from '../SurveyButton';

const EventCodeModal = ({ onButtonPress, text, textChange, value }) => {
  return (
    <View style={styles.popup}>
      <TextInput 
        style={styles.codeInput}
        onChangeText={textChange} 
        value={value}
        maxLength={4}
        placeholder={'****'}
        placeholderTextColor={colors.black}
        autoCorrect={false}
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