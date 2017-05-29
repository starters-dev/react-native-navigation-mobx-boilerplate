// @flow

import { Platform }   from 'react-native';
import { Navigation } from 'react-native-navigation';
import Constants      from '../Constants';
import TabBar         from '../TabBar';

const startTabBasedApp = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        ...Constants.Screens.FIRST_TAB
      },
      {
        ...Constants.Screens.SECOND_TAB
      }
    ],
    ...Platform.select({
        ios: {
          tabsStyle: TabBar.Main,
        },
        android: {
          appStyle: TabBar.Main,
        },
      }),
    drawer: {
      left: {
        screen: Constants.Screens.DRAWER.screen
      },
      disableOpenGesture: false
    },
  });
}

const openLoginModalIn = (navigator: { showModal: Function }, withCancelButton: boolean = true,) => {
  navigator.showModal({
    ...Constants.Screens.LOGIN_SCREEN,
    passProps: { withCancelButton },
    overrideBackPress: true, // [Android] if you want to prevent closing a modal by pressing back button in Android
  });
}

export default {
  startTabBasedApp,
  openLoginModalIn
}
