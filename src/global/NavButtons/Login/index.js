// @flow

import Constants from '../../Constants';
import Stores    from '../../../stores';

export default {
  leftButtons: Stores.App.isAndroid ? [{ id:'cancel' }] : [{
    id    : 'cancel',
    title : 'Cancel',
  }],

  // rightButtons: [{
  //   id    : '...',
  //   title : '...',
  // }],
}
