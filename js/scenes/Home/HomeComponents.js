import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
  Text,
  ScrollView
} from 'react-native';
import Moment from 'moment';

import { styles } from './styles';

// COMPONENTS

export const DateHolder = ({ nextEvent }) => (
  <View style={styles.dateHolder}>
    <Text style={styles.eventDay}>{Moment.unix(nextEvent.date).format('D')}</Text>
    <Text style={styles.eventMonth}>{(Moment.unix(nextEvent.date).format('MMM')).toUpperCase()}</Text>
  </View>
);

export const EventInfo = ({ nextEvent }) => (
  <View style={styles.eventInfo}>
    <Text style={styles.nextEvent}>Next Event:</Text>
    <Text style={styles.eventDate}>
      {Moment.unix(nextEvent.date).format('MMMM Do YYYY')}
    </Text>
    <Text style={styles.eventDate}>
      {Moment.unix(nextEvent.startTime).format('hh:mm a')} - {Moment.unix(nextEvent.endTime).format('hh:mm a')}
    </Text>
  </View>
)

export const EventLocation = ({ location }) => {
  
  const {
    streetNumber,
    streetName,
    name,
    city,
    province,
    unitNumber,
    postCode
  } = location;
  
  return (
    <View>
      <Text style={styles.locationText}>
        {(location) && name}
      </Text>
      <Text style={styles.locationText}>
        {(location) && `${streetNumber} ${streetName} ${unitNumber}, ${city}, ${province}, ${postCode}`}
      </Text>
    </View>
  )
};

export const AttendeeListItem = ({ attendee }) => (
  <View style={styles.attendeeContainer}>
    <Image
      style={styles.attendeePhoto}
      source={require('../../assets/images/glenn.png')}
    />
    <Text style={styles.attendeeName}>{attendee.fullName}</Text>
  </View>
);


export const AttendeeList = ({ attendees }) => (
  <View style={styles.attendContainer}>
    <Text style={styles.attendHeader}>Attending</Text>
    <ScrollView contentContainerStyle={styles.attendeeScrollView}>
      {(attendees)
        && attendees.map(attendee => (
          <AttendeeListItem
            key={attendee.email}
            attendee={attendee}
          />
        ))}
    </ScrollView>
  </View>
);

DateHolder.propTypes,
EventInfo.propTypes = {
  nextEvent: PropTypes.shape({
    attendees: PropTypes.arrayOf(PropTypes.shape({
      bio: PropTypes.string,
      email: PropTypes.string,
      fullName: PropTypes.string,
      goals: PropTypes.objectOf(PropTypes.string),
      myTalks: PropTypes.arrayOf(PropTypes.string),
      socialMediaUrls: PropTypes.objectOf(PropTypes.string),
      speakerStats: PropTypes.arrayOf(PropTypes.shape({
        quality: PropTypes.string,
        submitAmnt: PropTypes.number,
        value: PropTypes.number
      })),
    })),
    date: PropTypes.number,
    startTime: PropTypes.number,
    endTime: PropTypes.number,
    eventCode: PropTypes.string,
    id: PropTypes.string,
    location: PropTypes.objectOf(PropTypes.string),
    speakers: PropTypes.arrayOf(PropTypes.string),
    talks: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

EventLocation.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired
};

AttendeeListItem.propTypes = {
  attendee: PropTypes.shape({
    bio: PropTypes.string,
    email: PropTypes.string,
    fullName: PropTypes.string,
    goals: PropTypes.objectOf(PropTypes.string),
    myTalks: PropTypes.arrayOf(PropTypes.string),
    socialMediaUrls: PropTypes.objectOf(PropTypes.string),
    speakerStats: PropTypes.arrayOf(PropTypes.shape({
      quality: PropTypes.string,
      submitAmnt: PropTypes.number,
      value: PropTypes.number
    }))
  }).isRequired
}

AttendeeList.propTypes = {
  attendees: PropTypes.arrayOf(PropTypes.shape({
    bio: PropTypes.string,
    email: PropTypes.string,
    fullName: PropTypes.string,
    goals: PropTypes.objectOf(PropTypes.string),
    myTalks: PropTypes.arrayOf(PropTypes.string),
    socialMediaUrls: PropTypes.objectOf(PropTypes.string),
    speakerStats: PropTypes.arrayOf(PropTypes.shape({
      quality: PropTypes.string,
      submitAmnt: PropTypes.number,
      value: PropTypes.number
    })),
  })).isRequired
};