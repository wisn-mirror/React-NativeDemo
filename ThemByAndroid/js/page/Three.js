/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    DeviceEventEmitter,
} from 'react-native';
import BaseComponent from "../BaseComponent"

export default class Three extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            them:this.props.them,
        };
    }

    render() {
        return (
            <View style={[{
                flex: 1,
                alignItems: 'center',
            }, this.state.them.ThemStyles.OneOutViewStyle]}>
                <Text style={{color: 'black', fontSize: 30}}>
                    Three
                </Text>
                <TouchableOpacity onPress={() => this._onPress()}>
                    <Text style={{color: 'red', fontSize: 30}}>back </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this._onPressChangeThem("#2ccd79")
                }}>
                    <Text style={{color: 'red', fontSize: 30}}>changStyle_red</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this._onPressChangeThem("#ffcbdc")
                }}>
                    <Text style={{color: 'red', fontSize: 30}}>changStyle_blue</Text>
                </TouchableOpacity>
            </View>
        );
    }

    _onPress() {
        this.props.navigator.pop();
    }

    _onPressChangeThem(color) {
        DeviceEventEmitter.emit("changeThem", "changeThemAction", color)
    }
}
