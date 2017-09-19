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
    NativeModules,
    Image,
} from 'react-native';
import Two from "./Two";
import BaseComponent from "../BaseComponent"

const MainModule = NativeModules.MainModule;

export default class One extends BaseComponent {
    constructor(props) {
        super(props);
        console.log("coldddor" + this.props.them.bgcolor);
        console.log("coldddorddd:" + this.props.them.ThemStyles.OneOutViewStyle);
        this.state = {
            them: this.props.them,
            image:'gift_0',
        };
    }

    render() {
        console.log("state.render:"+this.state.image);
        return (
            <View style={[{
                flex: 1,
                alignItems: 'center',
            }, , this.state.them.ThemStyles.OneOutViewStyle]}>
                <Text style={{color: 'red', fontSize: 30}}>
                    One
                </Text>
                <TouchableOpacity onPress={() => this.setDefault()}>
                    <Text style={{color: 'red', fontSize: 30}}>setDefault</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.sendChageThemMessage()}>
                    <Text style={{color: 'red', fontSize: 30}}>sendChageThemMessage</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._onPress()}>
                    <Text style={{color: 'red', fontSize: 30}}>Two</Text>
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
        this.props.navigator.push(
            {
                component: Two,
                props: {
                    ...this.props,
                    them: this.state.them,
                }
            }
        )
    }
}

