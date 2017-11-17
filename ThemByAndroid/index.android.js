/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';

import Setting from './js/view/Setting';
AppRegistry.registerComponent('Setting', () => Setting);

import SkinSetting from './js/view/SkinSetting';
AppRegistry.registerComponent('SkinSetting', () => SkinSetting);

import gift_fram from './js/view/gift_fram';
AppRegistry.registerComponent('gift_fram', () => gift_fram);

import NavigatorComp from './js/view/NavigatorComp';
AppRegistry.registerComponent('NavigatorComp', () => NavigatorComp);
