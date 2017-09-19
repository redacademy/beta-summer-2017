import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import Events from './Events';
import Loader from '../../components/Loader';
import '../../redux/modules/actions/eventActions';
import { colors, typography } from '../../config/styles';
import { auth } from '../../config/firebase';
import { getTime } from '../../config/helpers';

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
  componentWillMount() {
    this.displayAllEvents()
  }
  displayAllEvents = () => {
    this.setState({events: this.props.eventsData.events})
  }
  displayPastEvents = () => {
    const now = getTime();
    const pastEvents = this.props.eventsData.events.filter(event => {
      return event.date < now
    })
    this.setState({events: pastEvents})
  }
  displayUpcomingEvents = () => {
    const now = getTime();
    const upcomingEvents = this.props.eventsData.events.filter(event => {
      return event.date > now
    })
    this.setState({events: upcomingEvents})
  }
  displayAttendedEvents = () => {
    const attendedEvents = this.props.eventsData.events.filter(event =>{
      return event.attendees.includes(auth.currentUser.uid)
    })
    this.setState({events: attendedEvents})
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
        eventsData={this.state.events}
        eventDate={this.eventDate}
        eventTime={this.eventTime}
        navigatorUID={'events'}
        displayAllEvents={this.displayAllEvents}
        displayPastEvents={this.displayPastEvents}
        displayUpcomingEvents={this.displayUpcomingEvents}
        displayAttendedEvents={this.displayAttendedEvents}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  eventsData: state.events
});

export default connect(mapStateToProps)(EventsContainer);
