import { createRouter } from '@expo/ex-navigation';
import NavigationLayout from './NavigationLayout';

import LandingPage from '../scenes/LandingPage';
import Dashboard from '../scenes/Dashboard';
import Events from '../scenes/Events';
import Event from '../scenes/Event';
import Home from '../scenes/Home';
import Profile from '../scenes/Profile';
import Login from '../scenes/Login';
import Surveys from '../scenes/Surveys';
import Speaker from '../scenes/Speaker';

const Router = createRouter(() => ({
  landing: () => LandingPage,
  navigation: () => NavigationLayout,
  dashboard: () => Dashboard,
  events: () => Events,
  home: () => Home,
  profile: () => Profile,
  login: () => Login,
  surveys: () => Surveys,
  speaker: () => Speaker,
  event: () => Event,
}))

export default Router;