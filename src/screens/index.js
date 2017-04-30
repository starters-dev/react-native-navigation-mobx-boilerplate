// @flow

import { Navigation } from 'react-native-navigation';

import MainScreen from './MainScreen';

export function registerScreens(store: {}, Provider: {}) {
  Navigation.registerComponent('app.FirstTabScreen', () => MainScreen, store, Provider);
  Navigation.registerComponent('app.SecondTabScreen', () => MainScreen, store, Provider);
  Navigation.registerComponent('app.PushedScreen', () => MainScreen, store, Provider);
}
