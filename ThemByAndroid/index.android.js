/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Gift from './js/Gift';
import A from './js/A';
AppRegistry.registerComponent('ThemByAndroid', () => Gift);

// AppRegistry.registerComponent('Gift', () => Gift);
AppRegistry.registerComponent('Gift', () => A);
