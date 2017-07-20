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
var HomeTopMiddle = require('../../LocalData/HomeTopMiddle.json')
var HomeTopMiddleView = React.createClass({
    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{Alert.alert('hello','world')}}>
                <View style={HomeTopMiddleViewStyle.container}>
                    <View style={HomeTopMiddleViewStyle.leftViewCenterView}>
                        <Text style={{fontSize: 18, color: '#fa6e4c'}}>{HomeTopMiddle.data[0].title}</Text>
                        <Text
                            style={{fontSize: 12, color: 'gray', marginTop: 4}}>{HomeTopMiddle.data[0].subTitle}</Text>
                    </View >
                    <Image source={{uri: HomeTopMiddle.data[0].image}} style={HomeTopMiddleViewStyle.RightImageStyle}/>
                </View>
            </TouchableOpacity>
        );
    },


});

const HomeTopMiddleViewStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 5,
        marginTop: 10,
    },
    leftViewCenterView: {
        width: Swidth / 2,
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginLeft: 20,
    },
    RightImageStyle: {
        width: 110,
        height: 38,
        marginRight: 10


    },

});
module.exports = HomeTopMiddleView;