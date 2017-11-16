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
    BackHandler,
    NativeModules,
    Image,
} from 'react-native';
import BaseComponent from "../BaseComponent"

const SkinModule = NativeModules.SkinModule;
export default class SkinSetting extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            gift_0:props.gift_0,
            home_0:props.home_0,
            watch_0:props.watch_0,
            primary:props.primary,
        };
    }

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor:this.state.primary,

            }}>
                <TouchableOpacity onPress={() => this.changeSkin1()}>
                    <Text style={{color: 'red', fontSize: 30}}>changeSkin1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.changeSkin2()}>
                    <Text style={{color: 'red', fontSize: 30}}>changeSkin2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setDefault()}>
                    <Text style={{color: 'red', fontSize: 30}}>setDefault</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._onPress()}>
                    <Text style={{color: 'red', fontSize: 30}}>back </Text>
                </TouchableOpacity>

                <View>
                    <Image source={{uri: this.state.gift_0}} style={{width: 100, height: 100}}/>
                    <Image source={{uri: this.state.home_0}} style={{width: 100, height: 100}}/>
                    <Image source={{uri: this.state.watch_0}} style={{width: 100, height: 100}}/>
                </View>
            </View>
        );
    }

    _onPress() {
        BackHandler.exitApp();
    }

    changeSkin1() {
        SkinModule.changeSkin("theme-com.wisn.skin1--65-1.0-2017-11-02--06-28-16.skin");
    }

    setDefault() {
        SkinModule.setDefaultSkin();
    }

    changeSkin2() {
        SkinModule.changeSkin("theme-com.wisn.skin2--65-1.0-2017-11-02--06-28-29.skin");
    }

    /** 重写componentWillMount 方法一定要加 super.componentWillMount() 方法添加监听器*/
    componentWillMount() {
        this.updateSkin("");
        super.componentWillMount();
    }

    /**重写 updateSkin 在换肤的时候重新获取皮肤资源*/
    updateSkin(params) {
        var colorList = new Array();
        colorList.push("primary");
        var imageList = new Array();
        imageList.push("home_0");
        imageList.push("watch_0");
        imageList.push("gift_0");
        SkinModule.getColorImageList(colorList, imageList, (result) => this.setState(result))
    }
}
