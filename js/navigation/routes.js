import { createRouter } from '@expo/ex-navigation';
import NavigationLayout from './NavigationLayout';

import LandingPage from '../scenes/LandingPage';
import Dashboard from '../scenes/Dashboard';
import Events from '../scenes/Events';
import EventScene from '../scenes/Event';
import Home from '../scenes/Home';
import Profile from '../scenes/Profile';
import AccountSettings from '../scenes/AccountSettings/';
import Login from '../scenes/Login';
import Surveys from '../scenes/Surveys';
import Speaker from '../scenes/Speaker';
import Signup from '../scenes/Signup';
import SurveyComplete from '../scenes/SurveyComplete';

const Router = createRouter(() => ({
  landing: () => LandingPage,
  navigation: () => NavigationLayout,
  dashboard: () => Dashboard,
  events: () => Events,
  home: () => Home,
  profile: () => Profile,
  settings: () => AccountSettings,
  login: () => Login,
  surveys: () => Surveys,
  speaker: () => Speaker,
  event: () => EventScene,
  signup: () => Signup,
  surveyComplete: () => SurveyComplete
}))

export default Router;