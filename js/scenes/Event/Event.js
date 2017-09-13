import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import { styles } from './styles';

const SingleEvent = ({ eventsData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.eventContainer}>
        <Text style={styles.eventTime}>Speakers</Text>
        <Text style={styles.eventTime}>{moment(eventsData[0].startTime).format('h:mmA')} to {moment(eventsData[0].endTime).format('h:mmA')}</Text>
      </View>
      <ScrollView>
        <TouchableOpacity>
          <View style={styles.talkBorder} />
          <View style={styles.talkContainer}>
            <Image style={styles.image} source={{ uri: 'https://s3-eu-west-1.amazonaws.com/storage.publisherplus.ie/media.image.ie/uploads/2017/07/19173304/BWOTY17-PROMO-PIC-1-LR.jpg' }} />
            <View style={styles.talkDetails}>
              <Text style={styles.talkTitle}>"Title of Talk"</Text>
              <Text style={styles.speaker}>Speaker</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

SingleEvent.propTypes = {
  eventsData: PropTypes.arrayOf(PropTypes.shape({

  })).isRequired
}

export default SingleEvent;
