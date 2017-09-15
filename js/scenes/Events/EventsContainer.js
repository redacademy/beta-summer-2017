import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import Events from './Events';
import Loader from '../../components/Loader';
import '../../redux/modules/actions/eventActions';
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

  eventDate(date) {
    return (
      Moment.unix(date).format('dddd, MMMM Do YYYY')
    )
  }
  
  eventTime(time) {
    return (
      Moment.unix(time).format('h:mm a')    
    )
  }

  render() {
    if(this.props.eventsData.loading) return (<Loader />)
    return (
      <Events
        eventsData={this.props.eventsData.events}
        eventDate={this.eventDate}
        eventTime={this.eventTime}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  eventsData: state.events
});

export default connect(mapStateToProps)(EventsContainer);
