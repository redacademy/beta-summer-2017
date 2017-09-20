import React from 'react';
import {
  Dimensions,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BarStatsGraph from '../../../components/BarStatsGraph';
import { colors } from '../../../config/styles';
import { styles } from '../styles';

const Dashboard = ({ talkStats }) => {
  return (
    <View style={styles.sceneContainer}>
      <LinearGradient
        style={{ height: Dimensions.get('window').height }}
        colors={[colors.lightGrey, colors.darkGrey]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.8 }}
      >
        <View style={styles.contentContainer}>
          <BarStatsGraph 
            title={"Talk Feedback"}
            stats={talkStats}
          />
        </View>
      </LinearGradient >
    </View >
  );
}

export default Dashboard;
