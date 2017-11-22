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
    BackHandler,
    Image,
    ToastAndroid,
    PermissionsAndroid,
} from 'react-native';
import BaseComponent from "../BaseComponent"
import ChildComponent from "./ChildComponent";
const SkinModule = NativeModules.SkinModule;
const SettingModule = NativeModules.SettingModule;
export default class Setting extends BaseComponent {
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
            <View style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor:this.state.primary,
            }}>
                <TouchableOpacity onPress={() => this._onPress()}>
                    <Text style={{color: this.state.colorPrimary, fontSize: 30}}>back </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.skinSetting()}>
                    <Text style={{color: this.state.colorPrimary, fontSize: 30}}>skinSetting</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.requestReadPermission.bind(this)}>
                    <Text style={{color: this.state.colorPrimary, fontSize: 20}}>权限申请读写</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.requestCarmeraPermission.bind(this)}>
                    <Text style={{color: this.state.colorPrimary, fontSize: 20}}>权限申请相机</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.requestLocationPermission.bind(this)}>
                    <Text style={{color: this.state.colorPrimary, fontSize: 20}}>权限申请访问地址</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.checkPermission.bind(this)}>
                    <Text style={{color: this.state.colorPrimary, fontSize: 20}}>查询权限申请读写</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.requestMultiplePermission.bind(this)}>
                    <Text style={{color: this.state.colorPrimary, fontSize: 20}}>权限申请所有</Text>
                </TouchableOpacity>
                 <View style={{flexDirection:'row'}}>
                    <Image source={{uri: this.state.gift_0}} style={{width: 100, height: 100}}/>
                    <Image source={{uri: this.state.home_0}} style={{width: 100, height: 100}}/>
                    <Image source={{uri: this.state.watch_0}} style={{width: 100, height: 100}}/>
                </View>
                <ChildComponent/>
            </View>
        );
    }
    show(data) {
        ToastAndroid.show(data,ToastAndroid.SHORT)
    }

    /*
    * 弹出提示框向用户请求某项权限。返回一个promise，最终值为用户是否同意了权限申请的布尔值。
    * 其中rationale参数是可选的，其结构为包含title和message)的对象。
    * 此方法会和系统协商，是弹出系统内置的权限申请对话框，
    * 还是显示rationale中的信息以向用户进行解释。
    * */
    async requestReadPermission() {
        try {
            //返回string类型
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    //第一次请求拒绝后提示用户你为什么要这个权限
                    'title': '我要读写权限',
                    'message': '没权限我不能工作，同意就好了'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.show("你已获取了读写权限")
            } else {
                this.show("获取读写权限失败")
            }
        } catch (err) {
            this.show(err.toString())
        }
    }
    async requestCarmeraPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    //第一次请求拒绝后提示用户你为什么要这个权限
                    'title': '我要相机权限',
                    'message': '没权限我不能工作，同意就好了'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.show("你已获取了相机权限")
            } else {
                this.show("获取相机失败")
            }
        } catch (err) {
            this.show(err.toString())
        }
    }

    async requestLocationPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    //第一次请求拒绝后提示用户你为什么要这个权限
                    'title': '我要地址查询权限',
                    'message': '没权限我不能工作，同意就好了'
                }
            )

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.show("你已获取了地址查询权限")
            } else {
                this.show("获取地址查询失败")
            }
        } catch (err) {
            this.show(err.toString())
        }
    }
    checkPermission() {
        try {
            //返回Promise类型
            const granted = PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
            )
            granted.then((data)=>{
                this.show("是否获取读写权限"+data)
            }).catch((err)=>{
                this.show(err.toString())
            })
        } catch (err) {
            this.show(err.toString())
        }
    }
    async requestMultiplePermission() {
        try {
            const permissions = [
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                PermissionsAndroid.PERMISSIONS.CAMERA
            ]
            //返回得是对象类型
            const granteds = await PermissionsAndroid.requestMultiple(permissions)
            var data = "是否同意地址权限: "
            if (granteds["android.permission.ACCESS_FINE_LOCATION"] === "granted") {
                data = data + "是\n"
            } else {
                data = data + "否\n"
            }
            data = data+"是否同意相机权限: "
            if (granteds["android.permission.CAMERA"] === "granted") {
                data = data + "是\n"
            } else {
                data = data + "否\n"
            }
            data = data+"是否同意存储权限: "
            if (granteds["android.permission.WRITE_EXTERNAL_STORAGE"] === "granted") {
                data = data + "是\n"
            } else {
                data = data + "否\n"
            }
            this.show(data)
        } catch (err) {
            this.show(err.toString())
        }
    }


    _onPress() {
        BackHandler.exitApp();
    }

    skinSetting() {
        SettingModule.startActivity("SkinSettingActivity");
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
        colorList.push("colorPrimary");
        var imageList = new Array();
        imageList.push("home_0");
        imageList.push("watch_0");
        imageList.push("gift_0");
        SkinModule.getColorImageList(colorList, imageList, (result) => this.setState(result))
    }
}
