import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { styles } from './styles';
import GradientWrapper from '../../components/GradientWrapper';
import { SpeakerHeader, SpeakerContent, GoalsList, FeedbackButton, WarningModal } from './SpeakerComponents';
import { goToSurvey } from '../../navigation/navHelpers';
// import SpeakerAvatar from '../../components/SpeakerAvatar';

const Speaker = ({ 
  speakerData, 
  checkRespondent, 
  displayWarningModal,
  warningModalState 
}) => {
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
        <FeedbackButton
          onPress={
            (checkRespondent())
              ? () => displayWarningModal(true)
              : () => goToSurvey({ speakerData })
          }
        />
        <WarningModal
          onPress={() => displayWarningModal(!warningModalState)}
          modalState={warningModalState}
        />
      </GradientWrapper>
    </View>
  )
}
export default Speaker;
