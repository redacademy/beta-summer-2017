import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Moment from 'moment';
import SingleEvent from './Event';
import '../../redux/modules/actions/eventActions';
import '../../redux/modules/actions/talkActions';
import '../../redux/modules/actions/userActions';
import Loader from '../../components/Loader/';
import { eventDataSet } from '../Lib/helperFunctions';
import Router from '../../navigation/routes';
import store from '../../redux/store';
import { attendEvent } from '../../config/helpers';
import { auth } from '../../config/firebase';

class EventContainer extends Component {
  static route = {
    navigationBar: {
      title(params){
        return Moment.unix(params.eventData.item.date).format('dddd, MMMM Do, YYYY').toUpperCase()
      } 
    }
  }

  attendEvent = () => {
    attendEvent(this.props.eventData.item.id, this.props.eventsData.events, auth.currentUser.uid)
  }

  render() {
    if (this.props.eventsData.loading) {
      return (
        <Loader />
      );
    } else {
      return (
        <SingleEvent
          navigatorUID={'event'}
          attendEvent={this.attendEvent}
          eventData={this.props.eventData.item}
          eventDataSet={eventDataSet(
            this.props.eventData.item,
            this.props.talksData,
            this.props.usersData
          )}
        />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    eventsData: state.events,
    usersData: state.users,
    talksData: state.talks
  }
}

EventContainer.propTypes = {
  eventsData: PropTypes.shape({
    loading: PropTypes.bool,
    events: PropTypes.arrayOf(PropTypes.shape({
      attendees: PropTypes.arrayOf(PropTypes.string),
      date: PropTypes.number,
      startTime: PropTypes.number,
      endTime: PropTypes.number,
      eventCode: PropTypes.string,
      id: PropTypes.string,
      location: PropTypes.objectOf(PropTypes.string),
      //speakers: PropTypes.arrayOf(PropTypes.string),
      talks: PropTypes.arrayOf(PropTypes.string)
    })).isRequired,
  }).isRequired,
  usersData: PropTypes.shape({
    loading: PropTypes.bool,
    users: PropTypes.shape({
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
    }),
  }).isRequired,
  talksData: PropTypes.shape({
    loading: PropTypes.bool,
    talks: PropTypes.shape({
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
    }).isRequired
  }).isRequired,
  eventData: PropTypes.shape({
    item: PropTypes.shape({
      //attendees: PropTypes.arrayOf(PropTypes.string),
      date: PropTypes.number,
      startTime: PropTypes.number,
      endTime: PropTypes.number,
      eventCode: PropTypes.string,
      id: PropTypes.string,
      location: PropTypes.objectOf(PropTypes.string),
      //speakers: PropTypes.arrayOf(PropTypes.string),
      talks: PropTypes.arrayOf(PropTypes.string)
    }).isRequired
  }).isRequired
}

export default connect(mapStateToProps)(EventContainer);

