import React, { Component } from 'react';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';

import Router from './routes'

class NavigationLayout extends Component {
  render() {
    return (
      <TabNavigation
        id="tabMain"
        initialTab="landing"
      >
        <TabItem
          id="landing"
          title="landing test"
          renderTitle={this.renderTitle} 
        >
          <StackNavigation
            id="landing"
            navigatorUID="landing"
            initialRoute={Router.getRoute('schedule')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
      </TabNavigation>  
    );
  }

  renderTitle(isSelected, title) {
    const titleStyle = {
      color: isSelected ? 'white' : '#999999',
      fontSize: 14
    }
    return (
      <Text style={titleStyle}>{title}</Text>
    )  
  }

}

export default NavigationLayout;