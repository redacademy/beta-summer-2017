import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry,
  StatusBar
} from 'react-native';
import {
  NavigationProvider,
  StackNavigation,
  NavigationContext
} from '@expo/ex-navigation';
import Router from './navigation/routes';
import Store from './redux/store';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store
});

export default class betatalks extends Component {
  render() {
    return (
      <Provider store={Store}>
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
      </Provider>
    );
  }
}
