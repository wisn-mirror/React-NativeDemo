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
    BackHandler,
} from 'react-native';
import BaseComponent from "../BaseComponent"
const SkinModule = NativeModules.SkinModule;
const MainModule = NativeModules.MainModule;

export default class gift_fram extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            gift_0:props.gift_0,
            home_0:props.home_0,
            watch_0:props.watch_0,
            primary:props.primary,
            colorPrimary:props.colorPrimary,
        };
    }

    render() {
        return (
            <View style={[{
                flex: 1,
                alignItems: 'center',
                backgroundColor:this.state.primary,
            } ]}>
                <TouchableOpacity onPress={() => this.setDefault()}>
                    <Text style={{color: this.state.colorPrimary, fontSize: 30}}>setDefault</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.nextActivity()}>
                    <Text style={{color:  this.state.colorPrimary, fontSize: 30}}>Setting</Text>
                </TouchableOpacity>

                <View>
                    <Image source={{uri: this.state.gift_0}} style={{width: 100, height: 100}}/>
                    <Image source={{uri: this.state.home_0}} style={{width: 100, height: 100}}/>
                    <Image source={{uri: this.state.watch_0}} style={{width: 100, height: 100}}/>
                </View>
            </View>
        );
    }
    nextActivity(){
        MainModule.startActivity("SettingActivity");
    }
    setDefault(){
        SkinModule.setDefaultSkin();
    }
    _onPress(){
        BackHandler.exitApp();
    }


    /** 重写componentWillMount 方法一定要加 super.componentWillMount() 方法添加监听器*/
    componentWillMount() {
        this.updateSkin("");
        super.componentWillMount();
    }
    /**重写 updateSkin 在换肤的时候重新获取皮肤资源*/
    updateSkin(params){
        var colorList=new Array();
        colorList.push("primary");
        colorList.push("colorPrimary");
        var imageList=new Array();
        imageList.push("home_0");
        imageList.push("watch_0");
        imageList.push("gift_0");
        SkinModule.getColorImageList(colorList,imageList,(result) =>this.setState(result))
    }
}

