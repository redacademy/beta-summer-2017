import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { styles } from './styles';
import GradientWrapper from '../../components/GradientWrapper';
import { 
  SpeakerHeader, 
  SpeakerContent, 
  GoalsList, 
  FeedbackButton, 
  WarningModal,
  EventModal
} from './SpeakerComponents';

const Speaker = ({ 
  speakerData, 
  checkRespondent, 
  checkEventCode,
  displayWarningModal,
  displayEventModal,
  warningModalState,
  inputEventCode,
  eventModalState,
  eventInput,
  setEventInput
}) => {
  return (
    <View style={styles.contianer}>
      <GradientWrapper>
        <SpeakerHeader speakerData={speakerData} />
        <View style={styles.speakerContainer}>
          <Image
            style={styles.speakerImage}
            source={{ uri: speakerData.speaker_id.imageUrl}}
          />
          <SpeakerContent speakerData={speakerData} />
        </View>
        <Text style={styles.titleText}>Speakers Goals</Text>
        <GoalsList speakerData={speakerData} />
        <FeedbackButton
          onPress={
            (checkRespondent())
              ? () => displayWarningModal(true)
              : () => inputEventCode()
          }
        />
        <WarningModal
          onPress={() => displayWarningModal(!warningModalState)}
          modalState={warningModalState}
        />
        <EventModal 
          onBackdropPress={() => displayEventModal(!eventModalState)}
          text={'Submit'}
          onButtonPress={() => checkEventCode(speakerData)}
          modalState={eventModalState}
          textChange={(text) => setEventInput(text)}
          inputValue={eventInput}
        />
      </GradientWrapper>
    </View>
  )
}
export default Speaker;
