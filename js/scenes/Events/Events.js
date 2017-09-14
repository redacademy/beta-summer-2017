import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { goToEvent } from '../../navigation/navHelpers';
import { styles } from './styles';
import { colors } from '../../config/styles';

const Events = ({ eventsData, eventDate, eventTime, navigatorUID }) => {

  const filterData = [
    //TODO: Add nev helper methods to func and action
    { title: 'PAST', func: console.log, action: 'past events filter' },
    { title: 'UPCOMING', func: console.log, action: 'upcoming events filter' },
    { title: 'ATTENDED', func: console.log, action: 'attended events filter' },
    { title: 'MY TALKS', func: console.log, action: 'my talks filter?' }
  ];

  const FilterButton = ({ data }) => {
    const { title, func, action } = data;
    return (
      <TouchableOpacity onPress={() => func(action)}>
        <View style={styles.eventsFilter}>
          <Text style={styles.filterText}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const EventListItem = ({ item }) => (
    <View key={item.id}>
      <TouchableOpacity style={styles.eventsListItem} onPress={() => goToEvent(navigatorUID, {item})}>
        <View style={styles.eventsListItemInfo}>
          <Text style={styles.eventDate}>{eventDate(item.date)}</Text>
          <Text style={styles.eventTime}>{eventTime(item.startTime)} - {eventTime(item.endTime)}</Text>
        </View>
        <View style={styles.eventsListItemSpeakers}>
          <Text style={{ color: 'white' }}>IMAGES GO HERE</Text>
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
          filterData.map((data, idx) => (
            <FilterButton data={data} key={idx} />
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

export default Events;
