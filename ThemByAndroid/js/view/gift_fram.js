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
import BaseComponent from "../BaseComponent"
const SkinModule = NativeModules.SkinModule;

export default class gift_fram extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            image:'gift_0',
            primary:"#fff",
        };
    }

    render() {
        return (
            <View style={[{
                flex: 1,
                alignItems: 'center',
                backgroundColor:this.state.primary,
            } ]}>
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
                <TouchableOpacity onPress={() => this.nextActivity()}>
                    <Text style={{color: 'red', fontSize: 30}}>nextActivity</Text>
                </TouchableOpacity>
                <View>
                    <Image source={{uri: this.state.image}} style={{width: 100, height: 100}}/>
                    <Image source={{uri: this.state.image}} style={{width: 100, height: 100}}/>
                    <Image source={{uri: this.state.image}} style={{width: 100, height: 100}}/>
                </View>
            </View>
        );
    }
    nextActivity(){
        MainModule.startTest();
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

