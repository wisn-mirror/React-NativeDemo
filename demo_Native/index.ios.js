/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    NativeModules
} from 'react-native';

export const RnModule = NativeModules.RnModule;
import NativeTest from "./js/view/NativeTest";
import demo_Native from "./js/view/Main";

AppRegistry.registerComponent('demo_Native', () => demo_Native);
AppRegistry.registerComponent('NativeTest', () => NativeTest);
