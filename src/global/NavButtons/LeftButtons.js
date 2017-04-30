// @flow

import Stores from '../../stores';

const withSideMenu = () => {
  return {
    leftButtons: Stores.App.isAndroid ? [{ id:'sideMenu' }] : [{
      icon: require('../../../img/navicon_menu.png'),
      id: 'menu'
    }],
  }
}

export default {
  withSideMenu,
}
