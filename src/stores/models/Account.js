// @flow

import { observable, computed } from 'mobx';
import { persist } from 'mobx-persist';

class Account {
  @persist @observable username = 'username'
  @persist @observable password = 'password' // of course, you should not store password as a plain text :)
}

export default Account;
