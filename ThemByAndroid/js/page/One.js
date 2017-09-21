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
            primary:"#fff",

        };
    }

    render() {
        console.log("state.render:"+this.state.image);
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
                <View>
                    <Image source={{uri: this.state.image}} style={{width: 100, height: 100}}/>
                    <Image source={{uri: this.state.image}} style={{width: 100, height: 100}}/>
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
        MainModule.getColor("primary","primary",(result) =>this.setState(result));
        MainModule.getImage("image","gift_0",(result) =>this.setState(result));
    }

    /**
     * 接收换主题消息后回调的方法
     *
     * @param props
     */
    nativeChangeThem(props){
        super.nativeChangeThem(props);
        MainModule.getColor("primary","primary",(result) =>this.setState(result));
        MainModule.getImage("image","gift_0",(result) =>this.setState(result));
       /* var a=new Array();
        a.push("primary");
        a.push("colorPrimary");
        a.push("colorPrimaryDark");
        a.push("colorPrimary");
        MainModule.getColorList(a,(result) =>this.setState(result))

        var a=new Array();
        a.push("gift_0");
        a.push("gift_1");
        a.push("colorPrimaryDark");
        a.push("ic_launcher");
        MainModule.getImageList(a,(result) =>this.setState(result))


        var map={};
        map['primary333']="primary";
        map['colorPrimary222']="colorPrimary";
        map['colorPrimaryDark111']="colorPrimaryDark";
        MainModule.getColorMap(map,(result) =>this.setState(result))

        var map={};
        map['primary3rewq33']="gift_0";
        map['coloreePrimaqqqry222']="gift_1";
        map['colorPrimaryDark111']="colorPrimaryDark";
        map['ic_launcher']="ic_launcher";
        MainModule.getImageMap(map,(result) =>this.setState(result))
*/
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

