import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import { styles } from './styles';
import BarStats from '../BarStats';

const BarStatsGraph = ({ title, stats }) => (
  <View>
    <Text style={styles.skillsHeader}>
      {title}
    </Text>
    <View style={styles.graphContainer}>
      {stats && stats.map(stat => (
        <BarStats
          key={stat.quality}
          quality={stat.quality}
          value={stat.value}
          submitAmnt={stat.submitAmnt}
        />
      ))}
    </View>
  </View>
);

export default BarStatsGraph;

BarStatsGraph.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    quality: PropTypes.string,
    value: PropTypes.number,
    submitAmnt: PropTypes.number,
  })).isRequired
};