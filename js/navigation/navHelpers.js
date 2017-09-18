import { NavigationActions } from '@expo/ex-navigation';
import Store from '../redux/store';
import Router from './routes';

export const goToEvent = (currentNavigatorUID, eventData) => {
  Store.dispatch(NavigationActions.push(
    currentNavigatorUID,
    Router.getRoute('event', { eventData })
  ));
}

export const pushSceneFromModal = ([currentNavigatorUID, scene]) => {
  Store.dispatch(NavigationActions.push(
    currentNavigatorUID,
    Router.getRoute(scene)
  ));
}

export const goToSpeaker = (currentNavigatorUID, speakerData) => {
  Store.dispatch(NavigationActions.push(
    currentNavigatorUID, 
    Router.getRoute('speaker', { speakerData })
  ));
}

