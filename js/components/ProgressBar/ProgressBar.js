import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const ProgressBar = ({ overlayText, completePerc, totalSteps }) => {

  return (
    <View style={styles.container}>
      <View style={[styles.complete, { flex: completePerc }]} />
      <View style={styles.textContainer}>
        <Text style={styles.overlay}>
          {overlayText}
        </Text>
      </View>
      <View style={[styles.incomplete, { flex: Math.abs(completePerc - totalSteps) }]} />
    </View>
  );
}

export default ProgressBar;

ProgressBar.propTypes = {

}
