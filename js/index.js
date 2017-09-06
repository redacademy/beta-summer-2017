
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry
} from 'react-native';
import {
  NavigationProvider,
  StackNavigation,
  NavigationContext
} from '@expo/ex-navigation';
import Router from './navigation/routes';


const navigationContext = new NavigationContext({
  router: Router,
})

export default class betatalks extends Component {
  render() {
    return (
      <NavigationProvider
        context={navigationContext}
      >
        <StatusBar barStyle="light-content" />
        <StackNavigation
          initialRoute={Router.getRoute('navigation')}
          navigatorUID="root"
          id="root"
        />
      </NavigationProvider>
    );
  }
}
