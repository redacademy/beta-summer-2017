import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry,
  Platform,
  StatusBar,
  View
} from 'react-native';
import {
  NavigationProvider,
  StackNavigation,
  NavigationContext
} from '@expo/ex-navigation';
import NavMenuPopUp from './components/NavMenuPopUp';
import Router from './navigation/routes';
import Store from './redux/store';
import { colors } from './config/styles';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store
});

const CustomStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[{ height: 20 }, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class betatalks extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider
          context={navigationContext}
        >
          <StatusBar barStyle="light-content" />
          <StackNavigation
            initialRoute={Router.getRoute('landing')}
            navigatorUID="root"
            id="root"
          />
          <NavMenuPopUp />
        </NavigationProvider>
      </Provider>
    );
  }
}