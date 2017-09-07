import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';
import { authReducer } from './modules/auth';
import { userFormsReducer } from './modules/user-forms';
<<<<<<< HEAD
import { EventsReducer } from './modules/events';
=======
import { HomeReducer } from './modules/home';
>>>>>>> added moment to project

export default combineReducers({ 
  navigation: NavigationReducer,
  auth: authReducer,
  forms: userFormsReducer,
<<<<<<< HEAD
  events: EventsReducer
=======
  home: HomeReducer
>>>>>>> added moment to project
});