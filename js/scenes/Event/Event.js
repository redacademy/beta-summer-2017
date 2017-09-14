import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import { goToSpeaker } from '../../navigation/navHelpers';
import { styles } from './styles';
import { colors } from '../../config/styles';

const SingleEvent = ({ eventData, eventDataSet, navigatorUID }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{ height: Dimensions.get('window').height }}
        colors={[colors.lightGrey, colors.darkGrey]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.8 }}
      >
        <View style={styles.eventContainer}>
          <Text style={styles.eventTime}>Speakers</Text>
          <Text style={styles.eventTime}>{moment(eventData.startTime).format('h:mmA')} to {moment(eventData.endTime).format('h:mmA')}</Text>
        </View>
        <ScrollView>
          {eventDataSet.map((item) => (
            <View key={item.id}>
              <TouchableOpacity onPress={() => goToSpeaker(navigatorUID, { item })}>
                <View style={styles.talkBorder} />
                <View style={styles.talkContainer}>
                  <Image style={styles.image} source={{ uri: 'https://s3-eu-west-1.amazonaws.com/storage.publisherplus.ie/media.image.ie/uploads/2017/07/19173304/BWOTY17-PROMO-PIC-1-LR.jpg' }} />
                  <View style={styles.talkDetails}>
                    <Text style={styles.talkTitle}>{item.title}</Text>
                    <Text style={styles.speaker}>{item.speaker_id.fullName}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

SingleEvent.propTypes = {
  eventData: PropTypes.arrayOf(PropTypes.shape({
    attendees: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.number,
    startTime: PropTypes.number,
    endTime: PropTypes.number,
    eventCode: PropTypes.string,
    id: PropTypes.string,
    location: PropTypes.objectOf(PropTypes.string),
    speakers: PropTypes.arrayOf(PropTypes.string),
    talks: PropTypes.arrayOf(PropTypes.string)
  })).isRequired,
  navigatorUID: PropTypes.string.isRequired,
  eventDataSet: PropTypes.arrayOf(PropTypes.shape({
    event_id: PropTypes.string,
    respondants: PropTypes.shape({
      init: PropTypes.bool,
    }),
    score: PropTypes.number,
    speaker_id: PropTypes.string,
    talkStats: PropTypes.arrayOf(PropTypes.shape({
      quality: PropTypes.string,
      submitAmnt: PropTypes.number,
      value: PropTypes.number
    })),
    talk_id: PropTypes.string,
    title: PropTypes.string
  })).isRequired
}

export default SingleEvent;
