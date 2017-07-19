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
} from 'react-native';

var Dimensions = require('Dimensions');
var Swidth = Dimensions.get('window').width;
var HomeTopMiddle = require('../../LocalData/HomeTopMiddle.json')
var HomeTopMiddleView = React.createClass({
    render() {
        return (
            <View style={HomeTopMiddleViewStyle.container}>
                <View style={HomeTopMiddleViewStyle.leftViewCenterView}>
                    <Text style={{fontSize:20,color:'#fa6e4c'}}>{HomeTopMiddle.data[0].title}</Text>
                    <Text style={{fontSize:12,color:'gray',marginTop:5}}>{HomeTopMiddle.data[0].subTitle}</Text>
                </View >
                <Image source={{uri:HomeTopMiddle.data[0].image}} style={HomeTopMiddleViewStyle.RightImageStyle}/>
            </View>
        );
    },


});

const HomeTopMiddleViewStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height:70,
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        borderColor:"#f0f0f0"
    },
    leftViewCenterView: {
        width: Swidth / 2,
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft:20,
    },
    RightImageStyle: {
        width: 110,
        height: 38,
        marginRight:10
    },

});
module.exports = HomeTopMiddleView;