/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TouchableOpacity
} from 'react-native';
import RnModule from "./js/RnModule";
export default class NativeTest extends Component {
    _onPress(){
        RnModule.showToast();
    }
    render() {
        return (
            <View style={styles.container}>
              <TouchableOpacity onPress={()=>this._onPress()}>
                <Text>显示原生toast</Text>
              </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('demo_Native', () => demo_Native);
