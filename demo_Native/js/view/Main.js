/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
    TouchableOpacity
} from 'react-native';
import {RnModule } from "../../index.android";
export default class demo_Native extends Component {
    _onPressShowToast(){
        RnModule.showToast();
    }
    _onPressStartNative(){
        RnModule.startNativeTest();
    }
    render() {
        return (
            <View style={styles.container}>
              <TouchableOpacity onPress={()=>this._onPressShowToast()}>
                <Text>show Native toast</Text>
              </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onPressStartNative()}>
                    <Text>start Native test</Text>
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