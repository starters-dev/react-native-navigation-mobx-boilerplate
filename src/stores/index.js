// @flow

import App from './App';
import Counter from './Counter';

const stores = {
  Counter,
  App,
}

// you can hydrate stores here with mobx-persist
// hydrate('Counter', stores.Counter);

export default {
  ...stores
};
