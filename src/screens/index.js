// @flow

import { Navigation } from 'react-native-navigation';

import Constants from '../global/Constants';

import FirstTab     from './FirstTab';
import SecondTab    from './SecondTab';
import Drawer       from './Drawer';
import PushedScreen from './PushedScreen';
import LoginScreen  from './LoginScreen';

export function registerScreens(store: {}, Provider: {}) {
  Navigation.registerComponent(Constants.Screens.FIRST_TAB.screen,     () => FirstTab, store, Provider);
  Navigation.registerComponent(Constants.Screens.SECOND_TAB.screen,    () => SecondTab, store, Provider);

  Navigation.registerComponent(Constants.Screens.DRAWER.screen,        () => Drawer, store, Provider);
  Navigation.registerComponent(Constants.Screens.PUSHED_SCREEN.screen, () => PushedScreen, store, Provider);
  Navigation.registerComponent(Constants.Screens.LOGIN_SCREEN.screen,  () => LoginScreen, store, Provider);
}
