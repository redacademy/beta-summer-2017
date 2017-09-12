import React, { Component } from 'react';
import { connect } from 'react-redux';
import Events from './Events';
import Loader from '../../components/Loader';
import { getEventsData } from '../../redux/modules/events';
import { colors, typography } from '../../config/styles';

class EventsContainer extends Component {

  static route = {
    navigationBar: {
      title: 'EVENTS',
      backgroundColor: colors.darkGrey,
      titleStyle: {
        fontFamily: typography.titleHeading,
        color: colors.white,
        fontSize: typography.norwester20
      }
    }
  }

  componentDidMount() {
    this.props.dispatch(getEventsData());
  }

  render() {
    if(!this.props.eventsData.length) {
      return (
        <Loader />
      )
    } else {
      return (
        <Events
          eventsData={this.props.eventsData}
        />        
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    eventsData: state.events.eventsData,
  }  
}

export default connect(mapStateToProps)(EventsContainer);
