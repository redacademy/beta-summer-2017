import React, { Component } from 'react';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';
import {
  Text,
  Image,
  Linking
} from 'react-native';
import { NavMenuPopUp } from '../components/NavMenuPopUp';
import { styles } from './styles';
import { typography, colors } from '../config/styles';
import Router from './routes';

const defaultRouteConfig = {
  navigationBar: {
    tintColor: 'white',
    backgroundColor: colors.darkGrey,
    titleStyle: {
      fontFamily: typography.titleHeading,
      fontSize: typography.norwester20
    }
  }
}

class NavigationLayout extends Component {

  openEmail() {
    Linking.openURL('mailto:contact@soapboxspeakers.com')
      .catch(err => console.error('An error occurred', err))
  }

  render() {
    return (
      <TabNavigation
        id="tabMain"
        initialTab="home"
        tabBarColor="#353434"
      >
        <TabItem
          id="home"
          title="home"
          renderTitle={this.renderTitle}
          renderIcon={() => <Image source={require('../assets/icons/home_icon.png')} style={styles.navIconIos}  />}          
        >
          <StackNavigation
            id="home"
            navigatorUID="home"
            initialRoute={Router.getRoute('home')}
          />
        </TabItem>
        <TabItem
          id="events"
          title="events"
          renderTitle={this.renderTitle}
          renderIcon={() => <Image source={require('../assets/icons/events_icon.png')} style={styles.navIconIos}  />}
        >
          <StackNavigation
            id="events"
            navigatorUID="events"
            initialRoute={Router.getRoute('events')}
          />
        </TabItem>
        <TabItem
          id="newTalk"
          title="new talk"
          renderTitle={this.renderTitle}
          renderIcon={() => <Image source={require('../assets/icons/newtalk_icon.png')} style={styles.navIconIos}  />}
          onPress={() => this.openEmail()}
        >
          <StackNavigation
            id="newTalk"
            navigatorUID="newTalk"
          />
        </TabItem>
        <TabItem
          id="dashboard"
          title="dashboard"
          renderTitle ={this.renderTitle}
          renderIcon={() => <Image source={require('../assets/icons/dashboard_icon.png')} style={styles.navIconIos}  />}          
        >
          <StackNavigation
            id="dashboard"
            navigatorUID="dashboard"
            initialRoute={Router.getRoute('dashboard')}
          />
        </TabItem>
        <TabItem
          id="more"
          title="more"
          renderTitle={this.renderTitle}
          renderIcon={() => <Image source={require('../assets/icons/more_icon.png')} style={styles.navIconIos} />}      
          //TODO: create redux state to manage conditional rendering of tabnav menu popup
          onPress={() => console.log('trigger popup render')}    
        >

        </TabItem>
      </TabNavigation>
    );
  }

  renderTitle(isSelected, title) {
    const titleStyle = {
      color: isSelected ? colors.lightGrey : colors.lightGrey,
      fontSize: 10,
      fontFamily: typography.fontMainRegular
    }
    return (
      <Text style={titleStyle}>{title}</Text>
    )
  }
}

export default NavigationLayout;