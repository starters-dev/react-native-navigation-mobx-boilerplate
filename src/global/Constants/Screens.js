// @flow

import Images from './Images';

export default {
  DRAWER: {
    screen : 'app.DrawerScreen',
  },
  FIRST_TAB: {
    screen       : 'app.FirstTabScreen',
    title        : 'First Tab',
    label        : 'First Tab',
    icon         : Images.TAB_1,
    selectedIcon : Images.TAB_1_selected,
  },
  SECOND_TAB: {
    screen       : 'app.SecondTabScreen',
    title        : 'Second Tab',
    label        : 'Second Tab',
    icon         : Images.TAB_1,
    selectedIcon : Images.TAB_1_selected,
  },
  PUSHED_SCREEN: {
    screen : 'app.PushedScreen',
    title  : 'Pushed Screen',
  },
}
