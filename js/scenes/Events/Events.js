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
  return (
    //TODO: Pass data into section list once Charlie completes his formatting
    //TODO: Add filter methods to button onPress listeners
    //TODO: Add nev helper method to event onPress listener
    <View style={styles.eventsWrapper}>
      <LinearGradient
        style={{ height: Dimensions.get('window').height }}
        colors={[colors.lightGrey, colors.darkGrey]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.8 }}
      >
        <View style={styles.eventsHeaderWrapper}>
          <TouchableOpacity onPress={() => console.log('past events filter')}>
            <View style={styles.eventsFilter}>
              <Text style={styles.filterText}>PAST</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('upcoming events filter')}>
            <View style={styles.eventsFilter}>
              <Text style={styles.filterText}>UPCOMING</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('attended events filter')}>
            <View style={styles.eventsFilter}>
              <Text style={styles.filterText}>ATTENDED</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('my talks filter')}>
            <View style={styles.eventsFilter}>
              <Text style={styles.filterText}>MY TALKS</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.eventsListWrapper}>
          <ScrollView>
            {
              eventsData.map((item) => (
                <View key={item.id}>
                  <TouchableOpacity style={styles.eventsListItem} onPress={() => goToEvent(navigatorUID, item)}>
                    <View style={styles.eventsListItemInfo}>
                      <Text style={styles.eventDate}>{eventDate(item.date)}</Text>
                      <Text style={styles.eventTime}>{eventTime(item.startTime)} - {eventTime(item.endTime)}</Text>
                    </View>
                    <View style={styles.eventsListItemSpeakers}>
                      <Text style={{color: 'white'}}>IMAGES GO HERE</Text>
                    </View>
                  </TouchableOpacity>  
                </View>
              ))
            }
          </ScrollView>
        </View>
      </LinearGradient>
    </View>
  )
}

export default Events;
