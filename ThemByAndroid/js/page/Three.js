/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    DeviceEventEmitter,
    Image,
    NativeModules,
} from 'react-native';
import BaseComponent from "../BaseComponent"
import Four from "./Four"
const MainModule = NativeModules.MainModule;

export default class Three extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            them: this.props.them,
            image:'gift_0',
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
                    <Text style={{color: 'red', fontSize: 30}}>changStyle_AAA</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this._onPressChangeThem("#ffcbdc")
                }}>
                    <Text style={{color: 'red', fontSize: 30}}>changStyle_BBB</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._onPressNext()}>
                    <Text style={{color: 'black', fontSize: 30}}>Four</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setDefault()}>
                    <Text style={{color: 'red', fontSize: 30}}>setDefault</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.sendChageThemMessage()}>
                    <Text style={{color: 'red', fontSize: 30}}>sendChageThemMessage</Text>
                </TouchableOpacity>
                <View>
                    <Image source={{uri: this.state.image}} style={{width: 100, height: 100}}/>
                </View>
            </View>
        );
    }

    setDefault() {
        MainModule.setDefaultThem();
    }
    sendChageThemMessage(){
        MainModule.changeThem();
    }
    componentDidMount(){
        super.componentDidMount();
        MainModule.getImage("image","gift_0",(result) =>this.setState(result));
    }

    nativeChangeThem(props){
        super.nativeChangeThem(props);
        MainModule.getImage("image","gift_0",(result) =>this.setState(result));
    }
    _onPress() {
        this.props.navigator.pop();
    }

    _onPressNext() {
        this.props.navigator.push(
            {
                component: Four,
                props: {
                    ...this.props,
                    them: this.state.them,
                }
            }
        )
    }

    _onPressChangeThem(color) {
        DeviceEventEmitter.emit("changeThem", "changeThemAction", color)
    }
}
