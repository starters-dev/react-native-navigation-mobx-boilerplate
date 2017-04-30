// @flow

import Counter from './Counter';

const stores = {
  Counter,
}

// you can hydrate stores here with mobx-persist
// hydrate('Counter', stores.Counter);

export default {
  ...stores
};
