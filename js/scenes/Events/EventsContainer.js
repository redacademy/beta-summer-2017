import React, { Component } from 'react';
import { connect } from 'react-redux';
import Events from './Events';

class EventsContainer extends Component {

  render() {
    return (
      <Events />
    )
  }
}

export default EventsContainer;
