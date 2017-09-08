import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// these files are imported as 'listeners' from the firebase database
import '../../redux/modules/actions/eventActions';
import '../../redux/modules/actions/userActions';
import Home from './Home';
import Loader from '../../components/Loader';
import { getNextEvent } from '../Lib/helperFunctions';

class HomeContainer extends Component {

  static route = {
    navigationBar: {
      title: 'HOME',
    }
  }

<<<<<<< HEAD
=======
  constructor(props) {
    super(props);
    this.state = {
      nextEvent: {}
    };
  }

  componentDidMount() {
    fetch("https://betatalks-7fc6d.firebaseio.com/events.json")
      .then(response => response.json())
      .then(data => {
        const nextEvent = data[0];
        console.log(nextEvent);
        fetch("https://betatalks-7fc6d.firebaseio.com/users.json")
          .then(res => res.json())
          .then(users => {
            const attendeesWithData = nextEvent.attendees.reduce((acc, val) => {
              acc.push(users[val]);
              return acc;
            }, []);
            nextEvent.attendees = attendeesWithData;
            this.setState({ nextEvent });
          })
      }).catch(err => `Error fetching JSON: ${err}`)
      .catch(error => `Error fetching JSON: ${error}`);
  }

>>>>>>> finished styling on home screen to scale to different screen sizes
  render() {
    const { events, users } = this.props;
    if (events.loading || users.loading) return <Loader />;
    return <Home nextEvent={getNextEvent(events.events, users.users)} />;
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
