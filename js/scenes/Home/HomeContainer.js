import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Home from './Home';
import Loader from '../../components/Loader';
import { fetchEventData } from '../../redux/modules/home';

class HomeContainer extends Component {

  static route = {
    navigationBar: {
      title: 'HOME',
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchEventData());
  }

  render() {
    if (this.props.loading) return <Loader />;
    return <Home nextEvent={this.props.nextEvent} />;
  }
}

const mapStateToProps = state => ({
  loading: state.home.loading,
  nextEvent: state.home.nextEvent
});

export default connect(mapStateToProps)(HomeContainer);

HomeContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
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
  }).isRequired
}
