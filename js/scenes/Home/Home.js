import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  AttendeeList,
  DateHolder,
  EventInfo,
  EventLocation
} from './HomeComponents';
import { styles } from './styles';
import { colors } from '../../config/styles';
import { logout } from '../../config/helpers';
import OutlinedButton from '../../components/OutlinedButton';



const Home = ({ nextEvent }) => (
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
            <DateHolder nextEvent={nextEvent} />
            <EventInfo nextEvent={nextEvent} />
          </View>
        </View>
        <AttendeeList attendees={nextEvent.attendees} />
        <View style={styles.locationContainer}>
          <EventLocation location={nextEvent.location} />
        </View>
      </View>
    </LinearGradient>
  </View >
);

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