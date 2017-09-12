import React from 'react';
import { View, Text, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { cStyles } from './cStyles';
import OutlinedButton from '../../components/OutlinedButton';

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
      <Icon style={cStyles.speakerIcons} name='ios-mail' />
      <Icon style={cStyles.speakerIcons} name='logo-linkedin' />
      <Icon style={cStyles.speakerIcons} name='logo-facebook' />
      <Icon style={cStyles.speakerIcons} name='logo-twitter' />
    </View>
  </ScrollView>
)

export const GoalsList = ({ speakerData }) => (

  <ScrollView style={cStyles.goalsContainer}>
    {Object.keys(speakerData.speaker_id.goals).map((key) => (
      speakerData.speaker_id.goals[key].length ? <Text style={cStyles.goalItem}> - {speakerData.speaker_id.goals[key]}</Text> : null
    )
    )}
  </ScrollView>
)

export const FeedbackButton = () => (

  <View style={cStyles.feedbackButton}>
    <OutlinedButton
      text={'GIVE FEEDBACK'}
    />
  </View>

)