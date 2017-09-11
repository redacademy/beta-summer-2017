import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';
//import { reducer as formReducer } from 'redux-form';
import { authReducer } from './modules/auth';
import { userFormsReducer } from './modules/user-forms';

export default combineReducers({ 
  navigation: NavigationReducer,
  auth: authReducer,
  forms: userFormsReducer
});