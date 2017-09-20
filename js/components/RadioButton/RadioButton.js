import React, { Component } from 'react'
import {
  View,
  TouchableWithoutFeedback
} from 'react-native';
import { styles } from './styles';

const RadioButton = ({ isSelected, children, onPress }) => {
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={onPress}
      >
        <View style={styles.buttonContainer}>
          <View style={[styles.radio, styles.outerStyle]}>
            {(isSelected) && <View style={styles.innerStyle} />}
          </View>
          <View style={styles.buttonLabel}>
            {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default RadioButton;
