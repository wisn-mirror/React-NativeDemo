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
const SkinModule = NativeModules.SkinModule;

export default class SkinSetting extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            image:'gift_0',
        };
    }

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
            }}>
                <Text style={{color: 'black', fontSize: 30}}>
                    Setting
                </Text>
                <TouchableOpacity onPress={() => this._onPress()}>
                    <Text style={{color: 'red', fontSize: 30}}>back </Text>
                </TouchableOpacity>
            </View>
        );
    }
    _onPress(){
        BackAndroid.exitApp();
    }
    skinSetting() {
        SkinModule.setDefaultThem();
    }

    componentDidMount(){
        super.componentDidMount();
        SkinModule.getImage("image","gift_0",(result) =>this.setState(result));
    }

    /** 重写componentWillMount 方法一定要加 super.componentWillMount() 方法添加监听器*/
    componentWillMount() {
        this.updateSkin("");
        super.componentWillMount();
    }
    /**重写 updateSkin 在换肤的时候重新获取皮肤资源*/
    updateSkin(params){
        var colorList=new Array();
        colorList.push("colorPrimary");
        var imageList=new Array();
        imageList.push("my_icon_service");
        imageList.push("my_icon_feedback");
        imageList.push("my_icon_setting");
        SkinModule.getColorImageList(colorList,imageList,(result) =>this.setState(result))
    }
}
