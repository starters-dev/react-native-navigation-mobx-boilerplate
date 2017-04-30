// @flow

import { Navigation } from 'react-native-navigation';

import FirstTab     from './FirstTab';
import SecondTab    from './SecondTab';
import Drawer       from './Drawer';
import PushedScreen from './PushedScreen';

export function registerScreens(store: {}, Provider: {}) {
  Navigation.registerComponent('app.FirstTabScreen',  () => FirstTab, store, Provider);
  Navigation.registerComponent('app.SecondTabScreen', () => SecondTab, store, Provider);
  Navigation.registerComponent('app.DrawerScreen',    () => Drawer, store, Provider);
  Navigation.registerComponent('app.PushedScreen',    () => PushedScreen, store, Provider);
}
