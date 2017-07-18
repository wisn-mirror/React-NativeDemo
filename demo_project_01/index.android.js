/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
var XMGMain=require('./Component/Main/XMGMain')
export default class I extends Component {
  render() {
    return (
      <XMGMain/>
    );
  }
}


AppRegistry.registerComponent('I', () => I);
