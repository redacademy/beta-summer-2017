import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// these files are imported as 'listeners' from the firebase database
import '../../redux/modules/actions/eventActions';
import '../../redux/modules/actions/userActions';
import Home from './Home';
import Loader from '../../components/Loader';

class HomeContainer extends Component {

  static route = {
    navigationBar: {
      title: 'HOME',
    }
  }

  getNextEvent = (events, users) => {
    const nextEvent = events.find(event => event.date > Math.floor(Date.now() / 1000));
    // return next event and replace attendees ids with full objects of user data
    const attendeesWithData = nextEvent.attendees.reduce((acc, val) => {
      acc.push(users[val]);
      return acc;
    }, []);
    nextEvent.attendees = attendeesWithData;
    return nextEvent;
  }

  render() {
    const { events, users } = this.props;
    if (events.loading || users.loading) return <Loader />;
    return <Home nextEvent={this.getNextEvent(events.events, users.users)} />;
  }
}

const mapStateToProps = state => ({
  events: state.events,
  users: state.users
});

export default connect(mapStateToProps)(HomeContainer);

HomeContainer.propTypes = {
  events: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    events: PropTypes.arrayOf(PropTypes.shape({
      attendees: PropTypes.arrayOf(PropTypes.string),
      date: PropTypes.number,
      startTime: PropTypes.number,
      endTime: PropTypes.number,
      eventCode: PropTypes.string,
      id: PropTypes.string,
      location: PropTypes.objectOf(PropTypes.string),
      speakers: PropTypes.arrayOf(PropTypes.string),
      talks: PropTypes.arrayOf(PropTypes.string),
    })).isRequired
  }).isRequired,
  users: PropTypes.shape({
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
};
