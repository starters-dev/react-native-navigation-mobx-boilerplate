// @flow

import { Navigation } from 'react-native-navigation';
import Provider from './utils/MobxRnnProvider';
import Stores from './stores';

import { registerScreens } from './screens';
registerScreens(Stores, Provider);

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'app.FirstTabScreen', // this is a registered name for a screen
      icon: require('../img/one.png'),
      selectedIcon: require('../img/one_selected.png'), // iOS only
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'app.SecondTabScreen',
      icon: require('../img/one.png'),
      selectedIcon: require('../img/one_selected.png'), // iOS only
      title: 'Screen Two'
    }
  ],
  drawer: {
    left: {
      screen: 'app.DrawerScreen'
    },
    disableOpenGesture: false
  },
});
