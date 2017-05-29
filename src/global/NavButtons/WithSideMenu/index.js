// @flow

import Constants from '../../Constants';
import Stores    from '../../../stores';

export default {
  leftButtons: Stores.App.isAndroid ? [{ id:'sideMenu' }] : [{
    id   : 'menu',
    icon : Constants.Images.SIDE_MENU,
  }],
}
