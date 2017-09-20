import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { styles } from './styles';

const BarStats = ({ quality, value, submitAmnt }) => (
  <View style={styles.graphBarContainer}>
    <Text style={styles.graphBarText}>
      {quality}
    </Text>
    <View style={styles.graphBarBorder}>
      <View style={[styles.complete, { flex: value / submitAmnt }]} />
      <View style={[styles.incomplete, { flex: Math.abs(value / submitAmnt - 10) }]} />
    </View>
  </View>
);

export default BarStats;

BarStats.propTypes = {

}
