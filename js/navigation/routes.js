import { createRouter } from '@expo/ex-navigation';
import NavigationLayout from './NavigationLayout';

import LandingPage from '../scenes/LandingPage';

const Router = createRouter(() => ({
  landing: () => LandingPage,
  navigation: () => NavigationLayout
}))

export default Router;