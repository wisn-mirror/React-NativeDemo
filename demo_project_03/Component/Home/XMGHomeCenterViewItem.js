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
var XMGHomeCenterViewItem = React.createClass({
    getDefaultProps(){
        return {
            title: '',
            subTitle: '',
            rightImage: '',
            titleColor: '',
            callBackFunc:null,
        }
    },
    getInitialState(){
        return {
            indexPage: 0,
        }
    },
    render() {
        return (
            <TouchableOpacity   style={XMGHomeCenterViewItemStyle.containerOut} activeOpacity={0.5} onPress={()=>this.callBack(this.props.title)}>
                <View style={XMGHomeCenterViewItemStyle.container}>
                    <View style={XMGHomeCenterViewItemStyle.indicatorStyle}>
                        <Text style={{
                            color: this.props.titleColor,
                            fontSize: 18,
                            paddingTop: 5
                        }}>{this.props.title}</Text>
                        <Text style={{fontSize: 12, paddingTop: 5, color:'gray'}}>{this.props.subTitle}</Text>
                    </View>
                    <Image source={{uri: this.props.rightImage}}
                           style={XMGHomeCenterViewItemStyle.imageViewStyle}/>
                </View>
            </TouchableOpacity>
        );
    },
    callBack(title){
        if(this.props.callBackFunc!=null){
            this.props.callBackFunc(title);
        }
    }
});

const XMGHomeCenterViewItemStyle = StyleSheet.create({
    containerOut: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 75,
        width: (Swidth * 0.5),
        borderBottomWidth: 0.3,
        borderBottomColor: "#f0f0f0",
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    indicatorStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    imageViewStyle: {
        flex: 1,
        height: 50,
        width: 30,
        marginRight: 10,
        resizeMode: 'contain',
    }
});
module.exports = XMGHomeCenterViewItem;