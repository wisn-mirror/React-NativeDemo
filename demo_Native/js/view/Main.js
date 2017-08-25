/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component,PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
    TouchableOpacity,
    processColor,
    requireNativeComponent,
} from 'react-native';
import {RnModule } from "../../index.android";
import MyTextView from "./MyTextView";

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
                {/*<MyTextView
                    color='#ff0000'
                    text='你好，TextView'
                />*/}
              <TouchableOpacity onPress={()=>this._onPressShowToast()}>
                <Text style={{marginTop:30 ,fontSize:40}}>show Native toast</Text>
              </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onPressStartNative()}>
                    <Text style={{marginTop:30 ,fontSize:40}}>start Native test</Text>
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