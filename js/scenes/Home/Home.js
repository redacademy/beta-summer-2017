import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  Image,
  View,
  Text,
  ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Moment from 'moment';
import { colors } from '../../config/styles';
import { styles } from './styles';

const Home = ({ nextEvent }) => {

  const {
    streetNumber,
    streetName,
    name,
    city,
    province,
    unitNumber,
    postCode
  } = nextEvent.location;

  return (
    <View style={styles.sceneContainer}>
      <LinearGradient
        style={{ height: Dimensions.get('window').height }}
        colors={[colors.lightGrey, colors.darkGrey]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.8 }}
      >
        <View style={styles.contentContainer}>
          <View style={styles.eventHeaderBar}>
            <View style={styles.dateContainer}>
              <View style={styles.dateHolder}>
                <Text style={styles.eventDay}>{Moment.unix(nextEvent.date).format('D')}</Text>
                <Text style={styles.eventMonth}>{(Moment.unix(nextEvent.date).format('MMM')).toUpperCase()}</Text>
              </View>
              <View style={styles.eventInfo}>
                <Text style={styles.nextEvent}>Next Event:</Text>
                <Text style={styles.eventDate}>
                  {Moment.unix(nextEvent.date).format('MMMM Do YYYY')}
                </Text>
                <Text style={styles.eventDate}>
                  {Moment.unix(nextEvent.startTime).format('hh:mm a')} - {Moment.unix(nextEvent.endTime).format('hh:mm a')}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.attendContainer}>
            <Text style={styles.attendHeader}>Attending</Text>
            <ScrollView contentContainerStyle={styles.attendeeScrollView}>
              {(nextEvent.attendees)
                ? nextEvent.attendees.map((attendee) => (
                  <View key={attendee.email} style={styles.attendeeContainer}>
                    <Image
                      style={styles.attendeePhoto}
                      source={require('../../assets/images/glenn.png')}
                    />
                    <Text style={styles.attendeeName}>{attendee.fullName}</Text>
                  </View>
                ))
                : null}
            </ScrollView>
          </View>
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>
              {(nextEvent.location)
                ? name
                : null
              }
            </Text>
            <Text style={styles.locationText}>
              {(nextEvent.location)
                ? `${streetNumber} ${streetName} ${unitNumber}, ${city}, ${province}, ${postCode}`
                : null
              }
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}

export default Home;

Home.propTypes = {
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
}