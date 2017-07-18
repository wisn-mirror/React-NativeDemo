/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    TouchableOpacity,
    Alert,
    ScrollView,
} from 'react-native';

var MoreItem=require('./XMGMoreItem');
var XMGMore = React.createClass({

    render() {
        return (
            <View style={moreStyle.container}>
                {this.renderHeaderNavBar()}
                <ScrollView style={{marginBottom:0}}>
                    <View style={{marginTop:20,backgroundColor:'white'}}>
                        <MoreItem
                            title="扫一扫"
                        />
                        <MoreItem
                            style={{marginTop:20}}
                            title="省流量模式"
                            isSwitch={true}
                        />
                        <MoreItem
                            title="消息提醒"
                        />
                        <MoreItem
                            title="邀请好友"
                        />
                        <MoreItem
                            title="清空缓存"
                            rightTitle="1.35M"
                        />
                    </View>
                    <View style={{marginTop:20,backgroundColor:'white'}}>
                        <MoreItem
                            title="意见反馈"
                        />
                        <MoreItem
                            title="问卷调查"
                        />
                        <MoreItem
                            title="支付帮助"
                        />
                        <MoreItem
                            title="网络诊断"
                        />
                        <MoreItem
                            title="关于码团"
                        />
                        <MoreItem
                            title="我要应聘"
                        />
                    </View>
                    <View style={{marginTop:20,backgroundColor:'white'}}>
                        <MoreItem
                            title="精品应用"
                        />
                    </View>
                </ScrollView>
            </View>
        );
    },
    renderHeaderNavBar(){
        return (
            <View style={moreStyle.navbarStyle}>
                <Text style={moreStyle.navTextStyle}>更多</Text>
                <TouchableOpacity onPress={()=>this.onPressSetting} style={moreStyle.navRightStyle}>
                <Image source={{uri:'icon_mine_setting'}} style={moreStyle.navImageStyle}/>
                </TouchableOpacity>
            </View>
        );
    },
    onPressSetting(){
        Alert.alert('setting','setting');
    }
});

const moreStyle = StyleSheet.create({
    container:{
        flexDirection:'column',
        flex:1,
    },
    navbarStyle:{
        flexDirection:'row',
        height:50,
        backgroundColor:'#ef5100',
        justifyContent:'center',
        alignItems:'center',
    },
    navTextStyle:{
        color:'white',
    },
    navImageStyle:{
        width: Platform.OS=='iso' ? 30:22,
        height: Platform.OS=='iso' ? 30:22,
    },
    navRightStyle:{
        position:'absolute',
        right:10,
        bottom:13,

    }
});
module.exports = XMGMore;