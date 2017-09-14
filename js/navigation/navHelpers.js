import { NavigationActions } from '@expo/ex-navigation';
import Store from '../redux/store';
import Router from './routes';

export const goToEvent = (currentNavigatorUID, eventData) => {
  Store.dispatch(NavigationActions.push(
    currentNavigatorUID,
    Router.getRoute('event', { eventData })
  ));
}

export const goToSpeaker = (speakerData) => {
  Store.dispatch(NavigationActions.push(
    'events',
    Router.getRoute('speaker', { speakerData })
  ));
}
export const goToLogin = (currentNavigatorUID) => {
  Store.dispatch(NavigationActions.push(
    currentNavigatorUID, 
    Router.getRoute('login')
  ));
}

export const goToSingup = (currentNavigatorUID) => {
  Store.dispatch(NavigationActions.push(
    currentNavigatorUID, 
    Router.getRoute('signup')
  ));
}


