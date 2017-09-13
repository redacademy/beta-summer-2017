import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';
import { authReducer } from './modules/auth';
import { userFormsReducer } from './modules/user-forms';

export default combineReducers({ 
  navigation: NavigationReducer,
  auth: authReducer,
  forms: userFormsReducer,
});