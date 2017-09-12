import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Home from './Home';
import Loader from '../../components/Loader';
import { getEvents } from '../../redux/modules/actions/eventActions';
import { getUsers } from '../../redux/modules/actions/userActions';

class HomeContainer extends Component {

  static route = {
    navigationBar: {
      title: 'HOME',
    }
  }

  componentDidMount() {
    this.props.getEvents();
    this.props.getUsers();
   
  }

  getAttendeesWithData = () => {
    const { events, users } = this.props;
    const nxtEvent = events.nextEvent;

    console.log("I AM NEXT EVENT", nxtEvent)

    const attendeesWithData = nxtEvent.attendees.reduce((acc, val) => {
      acc.push(users[val]);
      return acc;
    }, []);
    nxtEvent.attendees = attendeesWithData;
    return nxtEvent;
  }

  render() {
    const { events, users } = this.props;
    if (events.loading || users.loading) return <Loader />;
    return <View><Text>Hi</Text></View>;
    //return <Home nextEvent={this.getAttendeesWithData()} />;
  }
}

const mapStateToProps = state => ({
  events: state.events,
  users: state.users
});

export default connect(mapStateToProps, { getEvents, getUsers })(HomeContainer);

HomeContainer.propTypes = {
  //   loading: PropTypes.bool.isRequired,
  //   nextEvent: PropTypes.shape({
  //     attendees: PropTypes.arrayOf(PropTypes.shape({
  //       bio: PropTypes.string,
  //       email: PropTypes.string,
  //       fullName: PropTypes.string,
  //       goals: PropTypes.objectOf(PropTypes.string),
  //       myTalks: PropTypes.arrayOf(PropTypes.string),
  //       socialMediaUrls: PropTypes.objectOf(PropTypes.string),
  //       speakerStats: PropTypes.arrayOf(PropTypes.shape({
  //         quality: PropTypes.string,
  //         submitAmnt: PropTypes.number,
  //         value: PropTypes.number
  //       })),
  //     })),
  //     date: PropTypes.number,
  //     startTime: PropTypes.number,
  //     endTime: PropTypes.number,
  //     eventCode: PropTypes.string,
  //     id: PropTypes.string,
  //     location: PropTypes.objectOf(PropTypes.string),
  //     speakers: PropTypes.arrayOf(PropTypes.string),
  //     talks: PropTypes.arrayOf(PropTypes.string),
  //   }).isRequired
}

