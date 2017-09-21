import React from 'react';
import { View, Text, ScrollView, Linking } from 'react-native'
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import { cStyles } from './cStyles';
import OutlinedButton from '../../components/OutlinedButton';
import SurveyWarningModal from '../../components/SurveyWarningModal';
import EventCodeModal from '../../components/EventCodeModal';

export const EventModal = ({ modalState, onBackdropPress, onButtonPress, text, textChange, inputValue }) => (
  <View>
    <Modal
      isVisible={modalState}
      onBackdropPress={onBackdropPress}
      avoidKeyboard
    >
      <View style={{ alignSelf: 'center' }}>
        <EventCodeModal 
          onButtonPress={onButtonPress}
          text={text}
          value={inputValue}
          textChange={textChange}
        />
      </View>
    </Modal>
  </View>
);

export const WarningModal = ({ modalState, onPress }) => (
  <View>
    <Modal
      isVisible={modalState}
      onBackdropPress={onPress}
    >
      <View style={{ alignSelf: 'center' }}>
        <SurveyWarningModal
          text={"You have already provided feedback for this talk. You may only submit feedback once per talk."}
        />
      </View>
    </Modal>
  </View>
);

export const SpeakerHeader = ({ speakerData, styles }) => (
  <View style={cStyles.speakerHeader}>
    <Text style={cStyles.quoteContainer}>
      <Text style={cStyles.headerQuote}>"</Text>
      <Text style={cStyles.titleText}>{speakerData.title}</Text>
      <Text style={cStyles.headerQuote}>"</Text>
    </Text>
  </View>
)

export const SpeakerContent = ({ speakerData, styles }) => (

  <ScrollView style={cStyles.speakerContent}>
    <Text style={cStyles.speakerName}>{speakerData.speaker_id.fullName.toUpperCase()}</Text>
    <Text style={cStyles.speakerBio}>{speakerData.speaker_id.bio}</Text>
    <View style={cStyles.socialMedia}>
      {(speakerData.speaker_id.email) &&
      <Icon 
        onPress={() => Linking.openURL(`mailto:${speakerData.speaker_id.email}`)}
        style={cStyles.speakerIcons} 
        name='ios-mail' 
      />
      }
      {(speakerData.speaker_id.socialMediaUrls.linkedIn.length > 0) && 
      <Icon 
        onPress={() => Linking.openURL(`${speakerData.speaker_id.socialMediaUrls.linkedIn}`)} 
        style={cStyles.speakerIcons} 
        name='logo-linkedin' 
      />
      }
      {(speakerData.speaker_id.socialMediaUrls.facebook.length > 0) && 
      <Icon 
        onPress={() => Linking.openURL(`${speakerData.speaker_id.socialMediaUrls.facebook}`)}
        style={cStyles.speakerIcons} 
        name='logo-facebook' 
      />
      }
      {(speakerData.speaker_id.socialMediaUrls.twitter.length > 0) &&
      <Icon 
        onPress={() => Linking.openURL(`${speakerData.speaker_id.socialMediaUrls.twitter}`)}
        style={cStyles.speakerIcons} 
        name='logo-twitter' 
      />
      }
    </View>
  </ScrollView>
)

export const GoalsList = ({ speakerData }) => (

  <ScrollView style={cStyles.goalsContainer}>
    {Object.keys(speakerData.speaker_id.goals).map((key, index) => (
      (speakerData.speaker_id.goals[key].length > 0) && <Text key={index} style={cStyles.goalItem}> - {speakerData.speaker_id.goals[key]}</Text>
    )
    )}
  </ScrollView>
)

export const FeedbackButton = ({ onPress }) => (

  <View style={cStyles.feedbackButton}>
    <OutlinedButton
      text={'GIVE FEEDBACK'}
      onPress={onPress}
    />
  </View>

)