import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { goToEvent } from '../../navigation/navHelpers';
import { styles } from './styles';
import { colors } from '../../config/styles';

const Events = ({ 
  eventsData,
  selected, 
  eventDate, 
  eventTime, 
  navigatorUID, 
  displayAllEvents, 
  displayPastEvents, 
  displayUpcomingEvents, 
  displayAttendedEvents }) => {
  const filterData = [
    //TODO: Add filter methods
    { title: 'PAST', func: displayPastEvents, action: null },
    { title: 'UPCOMING', func: displayUpcomingEvents, action: null },
    { title: 'ATTENDED', func: displayAttendedEvents, action: null },
    { title: 'ALL EVENTS', func: displayAllEvents, action: null }
  ];

  const FilterButton = ({ data, selected }) => {
    const { title, func, action } = data;
    return (
      <TouchableOpacity onPress={() => func(action)}>
        <View style={(selected === title) ? styles.filterSelected : styles.eventsFilter}>
          <Text style={styles.filterText}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const EventListItem = ({ item }) => (
    <View key={item.id}>
      <TouchableOpacity style={styles.eventsListItem} onPress={() => goToEvent(navigatorUID, { item })}>
        <View style={styles.eventsListItemInfo}>
          <Text style={styles.eventDate}>{eventDate(item.date)}</Text>
          <Text style={styles.eventTime}>{eventTime(item.startTime)} - {eventTime(item.endTime)}</Text>
        </View>
        <View style={styles.attendeeContainer}>
          {item.attendees.map(attendee => (
            <Image
              key={attendee.user_id}
              style={styles.attendeeImage}
              source={{ uri: attendee.imageUrl }}
            />
          ))}
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <LinearGradient
      style={{ height: Dimensions.get('window').height }}
      colors={[colors.lightGrey, colors.darkGrey]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.8 }}
    >
      <View style={styles.eventsHeaderWrapper}>
        {
          filterData.map(data => (
            <FilterButton 
              data={data} 
              key={data.title}
              selected={selected} 
            />
          ))
        }
      </View>
      <ScrollView
        style={styles.scrollView}
      >
        <View style={styles.eventsListWrapper}>
          {
            eventsData.map((item) => (
              <EventListItem
                key={item.id}
                item={item}
              />
            ))
          }
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

Events.PropTypes = {
  eventsData: PropTypes.shape({
    loading: PropTypes.bool,
    events: PropTypes.objectOf(PropTypes.shape({
      date: PropTypes.number,
      startTime: PropTypes.number,
      endTime: PropTypes.number,
      id: PropTypes.string,
      eventCode: PropTypes.string,
      attendees: PropTypes.objectOf(PropTypes.string),
      speakers: PropTypes.objectOf(PropTypes.string),
      talks: PropTypes.objectOf(PropTypes.string),
      location: PropTypes.objectOf(PropTypes.shape({
        city: PropTypes.string,
        name: PropTypes.string,
        postCode: PropTypes.string,
        province: PropTypes.string,
        streetName: PropTypes.string,
        streetNumber: PropTypes.string,
        unitNumber: PropTypes.string
      })),
    })),
  }).isRequired,
  eventDate: PropTypes.func,
  eventTime: PropTypes.func,
  navigatorUID: PropTypes.string
};

export default Events;
