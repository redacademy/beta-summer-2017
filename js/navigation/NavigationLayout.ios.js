import React, { Component } from 'react';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';
import { Text } from 'react-native';
import { colors, typography } from '../config/styles';

import Router from './routes'

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
  render() {
    return (
      <TabNavigation
        id="tabMain"
        initialTab="landing"
      >
        <TabItem
          id="landing"
          title="landing temp tab"
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="landing"
            navigatorUID="landing"
            initialRoute={Router.getRoute('landing')}
          />
        </TabItem>
        <TabItem
          id="dashboard"
          title="dashboard"
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="dashboard"
            navigatorUID="dashboard"
            initialRoute={Router.getRoute('dashboard')}
          />
        </TabItem>
        <TabItem
          id="events"
          title="events"
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="events"
            navigatorUID="events"
            initialRoute={Router.getRoute('events')}
          />
        </TabItem>
        <TabItem
          id="home"
          title="home"
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="home"
            navigatorUID="home"
            initialRoute={Router.getRoute('home')}
          />
        </TabItem>
        <TabItem
          id="event"
          title="event"
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="event"
            navigatorUID="event"
            initialRoute={Router.getRoute('event')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
      </TabNavigation>
    );
  }

  renderTitle(isSelected, title) {
    const titleStyle = {
      color: isSelected ? 'black' : '#999999',
      fontSize: 14
    }
    return (
      <Text style={titleStyle}>{title}</Text>
    )
  }

}

export default NavigationLayout;