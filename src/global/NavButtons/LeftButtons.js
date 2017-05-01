// @flow

import Constants from '../../global/Constants';
import Stores from '../../stores';

const withSideMenu = () => {
  return {
    leftButtons: Stores.App.isAndroid ? [{ id:'sideMenu' }] : [{
      icon: Constants.Images.SIDE_MENU,
      id: 'menu'
    }],
  }
}

export default {
  withSideMenu,
}
