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

export const goToSurvey = (talkObj) => {
  Store.dispatch(NavigationActions.push(
    'events',
    Router.getRoute('surveys', { talkObj })
  ));
}

export const goToSurveyComplete = () => {
  Store.dispatch(NavigationActions.push(
    'events', 
    Router.getRoute('surveyComplete')
  ));
};

export const returnToHome = () => {
  Store.dispatch(NavigationActions.popToTop('main'));
  Store.dispatch(NavigationActions.popN('events', 4));
};

export const returnToEvents = () => {
  Store.dispatch(NavigationActions.popToTop('events'));
};

export const returnToSpeaker = () => {
  Store.dispatch(NavigationActions.popN('events', 2));
};