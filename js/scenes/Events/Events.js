import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Moment from 'moment';
import { styles } from './styles';

const Events = ({ eventsData }) => {
  return (
    //TODO: Pass data into section list once Charlie completes his formatting
    //TODO: Add filter methods to button onPress listeners
    //TODO: Add nev helper method to event onPress listener
    <View style={styles.eventsWrapper}>
      <View style={styles.eventsHeader}>
        <TouchableOpacity onPress={() => console.log('past events filter')}>
          <View style={styles.eventsFilterButton}>
            <Text style={styles.eventsFilterText}>PAST</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('upcoming events filter')}>
          <View style={styles.eventsFilterButton}>
            <Text style={styles.eventsFilterText}>UPCOMING</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('attended events filter')}>
          <View style={styles.eventsFilterButton}>
            <Text style={styles.eventsFilterText}>ATTENDED</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('my talks filter')}>
          <View style={styles.eventsFilterButton}>
            <Text style={styles.eventsFilterText}>MY TALKS</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.eventsListWrapper}>
          <TouchableOpacity onPress={() => console.log('nav helper method here')}>
            <View style={styles.eventsListItem}>
              <View style={styles.eventTimeWrapper}>
                <Text style={styles.eventItemDate}>{Moment.unix(eventsData[0].startTime).format('dddd, MMMM Do YYYY')}</Text>
                <Text style={styles.eventItemTime}>{Moment.unix(eventsData[0].startTime).format('h:mm A')} - {Moment.unix(eventsData[0].endTime).format('h:mm A')}</Text>
              </View>
              <View style={styles.eventSpeakerWrapper}>
                <Text style={{color: 'white'}}>Pictures here</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>  
    </View>
  )
}

export default Events;
