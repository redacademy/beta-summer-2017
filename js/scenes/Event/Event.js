import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import { goToSpeaker } from '../../navigation/navHelpers';
import OutlinedButton from '../../components/OutlinedButton/';
import { colors } from '../../config/styles';
import { styles } from './styles';

const EventItem = ({ item }) => (
  <TouchableOpacity onPress={() => goToSpeaker({ item })}>
    <View style={styles.talkBorder}>
      <View style={styles.talkContainer}>
        <Image style={styles.image} source={{ uri: item.speaker_id.imageUrl }} />
        <View style={styles.talkDetails}>
          <View style={styles.talkTitleContainer}>
            <Text style={styles.talkTitle}>{item.title}</Text>
          </View>
          <Text style={styles.speaker}>{item.speaker_id.fullName}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const SingleEvent = ({ eventData, eventDataSet, attendEvent, currentUser }) => {
  const attending = eventData.attendees.find(attendee => attendee.user_id === currentUser);
  return (
    <View style={styles.container}>
      <LinearGradient
        style={StyleSheet.absoluteFill}
        colors={[colors.lightGrey, colors.darkGrey]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.8 }}
      >
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.eventContainer}>
            <Text style={styles.eventTime}>Speakers</Text>
            <Text style={styles.eventTime}>{Moment.unix(eventData.startTime).format('h:mmA')} to {Moment.unix(eventData.endTime).format('h:mmA')}</Text>
          </View>
          {eventDataSet.map((item) => (
            <View key={item.talk_id}>
              <EventItem item={item} />
            </View>
          ))}
          <OutlinedButton
            text={
              (attending) ? 
                "you are attending" : 
                "attend event"
            }
            onPress={() => attendEvent()}
          />
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

SingleEvent.propTypes = {
  eventData: PropTypes.shape({
    attendees: PropTypes.arrayOf(PropTypes.shape({
      bio: PropTypes.string,
      email: PropTypes.string,
      fullName: PropTypes.string,
      goals: PropTypes.shape({
        goalOne: PropTypes.string,
        goalTwo: PropTypes.string,
        goalThree: PropTypes.string
      }),
      imageUrl: PropTypes.string,
      myTalks: PropTypes.arrayOf(PropTypes.string),
      socialMediaUrls: PropTypes.shape({
        facebook: PropTypes.string,
        linkedIn: PropTypes.string,
        twitter: PropTypes.string
      }),
      speakerStats: PropTypes.arrayOf(PropTypes.shape({
        quality: PropTypes.string,
        submitAmnt: PropTypes.number,
        value: PropTypes.number
      })),
      user_id: PropTypes.string
    })),
    date: PropTypes.number,
    startTime: PropTypes.number,
    endTime: PropTypes.number,
    eventCode: PropTypes.string,
    id: PropTypes.string,
    location: PropTypes.objectOf(PropTypes.string),
    //speakers: PropTypes.arrayOf(PropTypes.string),
    talks: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  eventDataSet: PropTypes.arrayOf(PropTypes.shape({
    event_id: PropTypes.string,
    respondants: PropTypes.shape({
      init: PropTypes.bool,
    }),
    score: PropTypes.number,
    speaker_id: PropTypes.shape({
      bio: PropTypes.string,
      email: PropTypes.string,
      fullName: PropTypes.string
    }),
    talkStats: PropTypes.arrayOf(PropTypes.shape({
      quality: PropTypes.string,
      submitAmnt: PropTypes.number,
      value: PropTypes.number
    })),
    talk_id: PropTypes.string,
    title: PropTypes.string
  })).isRequired,
  attendEvent: PropTypes.func.isRequired,
  currentUser: PropTypes.string
}

export default SingleEvent;
