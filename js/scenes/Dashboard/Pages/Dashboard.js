import React from 'react';
import { PropTypes } from 'prop-types';
import { Dimensions, Linking, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BarStatsGraph from '../../../components/BarStatsGraph';
import OutlinedButton from '../../../components/OutlinedButton';
import { colors } from '../../../config/styles';
import { styles } from '../styles';

const Dashboard = ({ stats }) => (
  <View style={styles.sceneContainer}>
    <LinearGradient
      style={{ height: Dimensions.get('window').height }}
      colors={[colors.lightGrey, colors.darkGrey]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.8 }}
    >
      <View style={styles.contentContainer}>
        <BarStatsGraph
          title={"My Speaking Skills"}
          stats={stats}
        />
        <OutlinedButton
          text={"Sign Up to Speak"}
          onPress={() => Linking.openURL('mailto:contact@soapboxspeakers.com')
            .catch(err => console.error('An error occurred', err))}
        />
      </View>
    </LinearGradient >
  </View >
);

export default Dashboard;

Dashboard.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    quality: PropTypes.string,
    value: PropTypes.number,
    submitAmnt: PropTypes.number,
  })).isRequired
};
