import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { styles } from './styles';
import GradientWrapper from '../../components/GradientWrapper';
import { SpeakerHeader, SpeakerContent, GoalsList, FeedbackButton } from './SpeakerComponents';
// import SpeakerAvatar from '../../components/SpeakerAvatar';

const Speaker = ({ speakerData }) => {
  return (
    <View style={styles.contianer}>
      <GradientWrapper>
        <SpeakerHeader speakerData={speakerData} />
        <View style={styles.speakerContainer}>
          <Image
            style={styles.speakerImage}
            source={require('../../assets/images/derek-van-dam-profile.jpeg')}
          />
          <SpeakerContent speakerData={speakerData} />
        </View>
        <Text style={styles.titleText}>Speakers Goals</Text>
        <GoalsList speakerData={speakerData} />
        <FeedbackButton />
      </GradientWrapper>
    </View>
  )
}
export default Speaker;
