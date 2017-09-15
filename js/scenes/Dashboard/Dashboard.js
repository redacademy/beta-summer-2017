import React from 'react';
import {
  Dimensions,
  View,
  Text
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { colors } from '../../config/styles';
import { styles } from './styles';

const Dashboard = () => {
  return (
    <View style={styles.sceneContainer}>
      <LinearGradient
        style={{ height: Dimensions.get('window').height }}
        colors={[colors.lightGrey, colors.darkGrey]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.8 }}
      >
        <View style={styles.contentContainer}>
          <View style={styles.skillsGraphContainer}>
            <Text style={styles.skillsHeader}>My Speaking Skills</Text>
            <View style={styles.graphBarContainer}>
              <View style={styles.graphBarBorder}>
                <Text style={styles.graphBarText}>Credibility</Text>
              </View>
              <View style={styles.graphBarBorder}>
                <Text style={styles.graphBarText}>Clarity</Text>
              </View>
              <View style={styles.graphBarBorder}>
                <Text style={styles.graphBarText}>Audience Engagement</Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient >
    </View >
  );
}

export default Dashboard;
