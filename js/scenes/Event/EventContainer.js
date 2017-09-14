import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SingleEvent from './Event';
import Loader from '../../components/Loader/';

class EventContainer extends Component {
  
  static route = {
    navigationBar: {
      title: 'WEDNESDAY, AUG 22, 2017',
    }
  }
  
  render() {
    if (this.props.eventsData.length) {
      return (
        <SingleEvent 
          eventsData={this.props.eventsData}
        />
      );
    } else {
      return (
        <Loader />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    eventsData: state.events.eventsData
  }
}

export default connect(mapStateToProps)(EventContainer);
