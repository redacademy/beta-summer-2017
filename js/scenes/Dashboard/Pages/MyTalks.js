import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { MyTalk } from '../Components/MyTalksComponents';
import { goToMyTalkStats } from '../../../navigation/navHelpers';
import { colors } from '../../../config/styles';
import { styles, talkStyles } from '../styles';

const MyTalks = ({ talks, userName }) => (
  <View style={styles.sceneContainer}>
    <LinearGradient
      style={StyleSheet.absoluteFill}
      colors={[colors.lightGrey, colors.darkGrey]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.8 }}
    >
      <ScrollView contentContainerStyle={talkStyles.talksContainer}>
        {talks && talks.map(talk => (
          <MyTalk
            key={talk.talk_id}
            title={talk.title}
            userName={userName}
            score={talk.score}
            onPress={() => goToMyTalkStats({ talk })}
          />
        ))}
      </ScrollView>
    </LinearGradient>
  </View>
);

export default MyTalks;

MyTalks.propTypes = {
  talks: PropTypes.arrayOf(PropTypes.shape({
    eventCode: PropTypes.string,
    event_id: PropTypes.string,
    score: PropTypes.number,
    //speaker_id: PropTypes.string,
    talkStats: PropTypes.arrayOf(PropTypes.shape({
      quality: PropTypes.string,
      value: PropTypes.number,
      submitAmnt: PropTypes.number
    })),
    talk_id: PropTypes.string,
    title: PropTypes.string
  })).isRequired
}