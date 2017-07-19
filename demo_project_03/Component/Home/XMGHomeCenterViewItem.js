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
var XMGHomeCenterViewItem = React.createClass({
    getDefaultProps(){
        return{
            title:'',
            subTitle:'',
            rightImage:'',
            titleColor:'',
        }
    },
    getInitialState(){
        return {
            indexPage: 0,
        }
    },
    render() {
        return (
            <View style={XMGHomeCenterViewItemStyle.container}>
                <View style={XMGHomeCenterViewItemStyle.indicatorStyle}>
                    <Text style={{color: this.props.titleColor ,fontSize:18,marginTop:5}}>{this.props.title}</Text>
                    <Text  style={{fontSize:14,marginTop:5}}>{this.props.subTitle}</Text>
                </View>
                <Image source={{uri:this.props.rightImage}}
                       style={XMGHomeCenterViewItemStyle.imageViewStyle}/>
            </View>
        );
    },

});

const XMGHomeCenterViewItemStyle = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth:0.3,
        borderColor:"#f0f0f0",
        height:75,
        width:(Swidth/2-1),
    },
    indicatorStyle: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageViewStyle:{
        flex:1,
        height:50,
        width:30,
        marginRight:5,
    }
});
module.exports = XMGHomeCenterViewItem;