/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

//引入外部js文件
var QQLoginView=require('./QQLoginView');
export default class C extends Component {
    render(){
        return(
           <QQLoginView/>
        );
    }
}


AppRegistry.registerComponent('C', () => C);
