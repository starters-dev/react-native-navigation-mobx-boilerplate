// @flow

import Provider       from './utils/MobxRnnProvider';
import Stores         from './stores';
import Constants      from './global/Constants';

import { registerScreens } from './screens';
registerScreens(Stores, Provider);

Constants.Global.startTabBasedApp()
