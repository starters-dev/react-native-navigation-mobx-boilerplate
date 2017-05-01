// @flow

import { Navigation } from 'react-native-navigation';
import Provider from './utils/MobxRnnProvider';
import Stores from './stores';
import Constants from './global/Constants';

import { registerScreens } from './screens';
registerScreens(Stores, Provider);

Navigation.startTabBasedApp({
  tabs: [
    {
      label        : Constants.Screens.FIRST_TAB.label,
      screen       : Constants.Screens.FIRST_TAB.screen, // this is a registered name for a screen
      icon         : Constants.Screens.FIRST_TAB.icon,
      selectedIcon : Constants.Screens.FIRST_TAB.selectedIcon, // iOS only
      title        : Constants.Screens.FIRST_TAB.title,
    },
    {
      label        : Constants.Screens.SECOND_TAB.label,
      screen       : Constants.Screens.SECOND_TAB.screen, // this is a registered name for a screen
      icon         : Constants.Screens.SECOND_TAB.icon,
      selectedIcon : Constants.Screens.SECOND_TAB.selectedIcon, // iOS only
      title        : Constants.Screens.SECOND_TAB.title,
    }
  ],
  drawer: {
    left: {
      screen: Constants.Screens.DRAWER.screen
    },
    disableOpenGesture: false
  },
});
