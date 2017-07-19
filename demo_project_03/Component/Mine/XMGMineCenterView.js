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
    Switch,
} from 'react-native';

var CenterItemData = require('./centerItem.json');
var XMGMineCenterView = React.createClass({

    render() {
        return (
            <View style={MimeCenterViewStyle.centerViewStyle}>
                {this.getRenderCenterItemView()}
            </View>
        );
    },
    getRenderCenterItemView(){
        var CenterItemView = [];
        for (var i = 0; i < CenterItemData.length; i++) {
            CenterItemView.push(
                <XMGMineCenterViewItem key={i}
                                       iconName={CenterItemData[i].iconName}
                                       title={CenterItemData[i].title}
                />
            );
        }
        return CenterItemView;
    }
});
var XMGMineCenterViewItem = React.createClass({
    getDefaultProps(){
        return {
            iconName: '',
            title: '',
        }
    },
    render(){
        return (
            <TouchableOpacity onPress={() => this.onPressCenterView()}>
                <View style={MimeCenterViewStyle.topViewStyle}>
                    <Image source={{uri: this.props.iconName}} style={MimeCenterViewStyle.topViewImageStyle}/>
                    <Text style={MimeCenterViewStyle.topViewTextStyle}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    },
    onPressCenterView(){
        Alert.alert('item', 'item');
    }


});

const MimeCenterViewStyle = StyleSheet.create({
    centerViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: 'white',

    },
    topViewStyle: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    topViewImageStyle: {
        width: Platform.OS == 'iso' ? 30 : 34,
        height: Platform.OS == 'iso' ? 20 : 24,
    },
    topViewTextStyle: {
        marginTop: 8,
        fontSize: 13,
    }
});
module.exports = XMGMineCenterViewItem;
module.exports = XMGMineCenterView;