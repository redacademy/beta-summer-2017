import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';
import { authReducer } from './modules/auth';
import { userFormsReducer } from './modules/user-forms';
import { EventsReducer } from './modules/reducers/eventReducer';
import { UsersReducer } from './modules/reducers/userReducer';
import { TalksReducer } from './modules/reducers/talkReducer';
import { HandleModal } from './modules/moreModal';

export default combineReducers({ 
  navigation: NavigationReducer,
  auth: authReducer,
  forms: userFormsReducer,
  events: EventsReducer,
  users: UsersReducer,
  talks: TalksReducer,
  modal: HandleModal
});