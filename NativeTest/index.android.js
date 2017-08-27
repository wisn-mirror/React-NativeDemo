'use strict';

import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import Dimensions from 'Dimensions';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

//促销品帮助页
import TextActivity from './js/view/TestActivity.js'
AppRegistry.registerComponent('TestActivity', () => TestActivity);
