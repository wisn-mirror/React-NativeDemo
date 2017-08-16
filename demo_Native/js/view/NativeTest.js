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
import {RnModule } from "../../index.android";
export default class NativeTest extends Component {
    constructor(props) {
      super(props);
      this.state = {
         message:"";
      };
    }
    _onPress(){

    }
    componentDidMount(){

    }

    render() {
        return (
            <View style={styles.container}>
              <TouchableOpacity onPress={()=>this._onPress()}>
                <Text>调用相机</Text>
              </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onPress()}>
                    <Text>显示原生toast</Text>
                </TouchableOpacity>
                <Text>原生消息:{this.state.message}</Text>
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
