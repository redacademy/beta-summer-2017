import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { talkStyles } from '../styles';

const TalkText = ({ talkTitle, speakerName }) => (
  <View style={talkStyles.talkInfoContainer}>
    <View style={talkStyles.infoTextContainer}>
      <Text style={talkStyles.talkTitle}>
        {talkTitle}
      </Text>
      <Text style={talkStyles.speakerName}>
        {speakerName}
      </Text>
    </View>
  </View>
);

const TalkScore = ({ tScore }) => (
  <View style={talkStyles.scoreHolder}>
    <Text style={talkStyles.score}>
      {tScore}
    </Text>
  </View>
);

export const MyTalk = ({ score, title, onPress, userName }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={talkStyles.talkBar}>
      <TalkScore tScore={score} />
      <TalkText talkTitle={title} speakerName={userName} />
    </View>
  </TouchableOpacity>
);

MyTalk.propTypes = {
  score: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

TalkScore.propTypes = {
  tScore: PropTypes.number.isRequired
};

TalkText.propTypes = {
  talkTitle: PropTypes.string.isRequired
};
