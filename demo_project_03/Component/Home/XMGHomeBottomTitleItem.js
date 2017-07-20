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
    Platform,
} from 'react-native';

var Dimensions = require('Dimensions');
var Swidth = Dimensions.get('window').width;
var XMGHomeBottomTitleItem = React.createClass({
    getDefaultProps(){
        return {
            leftIcon:'',
            title:'',
            message:'',
            callBackFunc:null,
        }
    },
    render() {
        return (
            <TouchableOpacity   style={XMGHomeBottomTitleItemStyle.containerOut} activeOpacity={0.5} onPress={()=>this.callBack(this.props.title)}>
                <View style={XMGHomeBottomTitleItemStyle.container}>
                    <View  style={XMGHomeBottomTitleItemStyle.leftViewStyle}>
                        <Image source={{uri:this.props.leftIcon}} style={XMGHomeBottomTitleItemStyle.leftImage}/>
                        <Text style={{marginLeft:5,fontSize:14,color:'gray'}}>{this.props.title}</Text>
                    </View>
                    <View  style={XMGHomeBottomTitleItemStyle.leftViewStyle}>
                        <Text  style={{marginRight:5,fontSize:14,color:'gray'}}>{this.props.message}</Text>
                        <Image  source={{uri:"icon_cell_rightArrow"}} style={XMGHomeBottomTitleItemStyle.rightImage}/>
                    </View>
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

const XMGHomeBottomTitleItemStyle = StyleSheet.create({
    containerOut: {

    },
    leftViewStyle:{
        flexDirection:'row',
        alignItems:'center',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        height:40,
    },
    leftImage:{
        height:25,
        width:25,
        marginLeft:10,
    },
    rightImage:{
        width: Platform.OS==='iso' ? 20:8,
        height: Platform.OS==='iso' ? 23:13,
        marginRight:10,

    },
});
module.exports = XMGHomeBottomTitleItem;