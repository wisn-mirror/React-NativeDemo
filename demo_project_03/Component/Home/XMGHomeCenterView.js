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
    Image,
    TouchableOpacity,
    Alert,
} from 'react-native';

var Dimensions = require('Dimensions');
var Swidth = Dimensions.get('window').width;
var HomeTopMiddleData = require('../../LocalData/HomeTopMiddleLeft.json')
var XMGHomeCenterViewItem = require('./XMGHomeCenterViewItem.js')
var XMGHomeCenterView = React.createClass({
    render() {
        return (
            <View style={XMGHomeCenterViewStyle.container}>
                {this.getLeftCenterView()}
                <View style={XMGHomeCenterViewStyle.rightCenterView}>
                    {this.getRightCenterView()}
                </View>
            </View>
        );
    },
    getLeftCenterView(){
        var data = HomeTopMiddleData.dataLeft;
        return (
            //{"img1" : "mdqg", "img2" : "yyms", "title" : "探路组碳烤鱼", "price": "¥9.5", "sale": "再减3元"}
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{Alert.alert("点击","hello")}}>
            <View style={XMGHomeCenterViewStyle.leftCenterView}>
                <Image source={{uri: data[0].img1}} style={XMGHomeCenterViewStyle.leftImageStyle}/>
                <Image source={{uri: data[0].img2}} style={[XMGHomeCenterViewStyle.leftImageStyle,{marginTop:3}]}/>
                <Text style={{fontSize: 14,color:'gray'}}>{data[0].title}</Text>
                <View style={XMGHomeCenterViewStyle.leftBottomTextStyle}>
                    <Text style={{fontSize: 12,color:'#2bc6b7',marginTop:3}}>{data[0].price}</Text>
                    <Text style={{fontSize: 12 ,color:'#f96d4a',backgroundColor:'yellow',marginTop:3}}>{data[0].sale}</Text>
                </View>
            </View>
            </TouchableOpacity>
        );
    },
    getRightCenterView(){
        var Views = [];
        var data = HomeTopMiddleData.dataRight;
        for (var i = 0; i < data.length; i++) {
            Views.push(
                <XMGHomeCenterViewItem
                    key={i}
                    title={data[i].title}
                    subTitle={data[i].subTitle}
                    rightImage={data[i].rightImage}
                    titleColor={data[i].titleColor}
                    callBackFunc={this.callBackFuncAlert}
                />
            )
        }
        return Views;
    },
    callBackFuncAlert(title){
        Alert.alert(title,title);
    }
});

const XMGHomeCenterViewStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height:150,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
    },
    leftCenterView: {
        width: Swidth / 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
    },
    rightCenterView: {
        width: Swidth / 2,

    },
    leftBottomTextStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftImageStyle: {
        width: 120,
        height: 38,
        resizeMode:'contain',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
module.exports = XMGHomeCenterView;