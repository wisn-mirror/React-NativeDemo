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
    ScrollView,
} from 'react-native';

var XMGMineItem = require('./XMGMineItem');
var XMGMine = React.createClass({

    render() {
        return (
            <ScrollView style={mineStyles.ScrollViewStyle}>
                <XMGMineItem
                    icon='like'
                    title='账单'
                    rightTitle='账户余额：¥100'
                />
                <XMGMineItem
                    icon='pay'
                    title='抵用券'
                    rightTitle='0'
                />
                <View style={{marginTop: 20}}>
                    <XMGMineItem
                        icon='like'
                        title='积分商城'
                    /></View>
                <View style={{marginTop: 20}}>
                    <XMGMineItem
                        icon='pay'
                        title='今日推荐'
                        rightIcon='icon_hot'
                    />
                </View>
                <View style={{marginTop: 20}}>
                    <XMGMineItem
                        icon='like'
                        title='账单'
                        rightTitle='轻松开店，招财进宝'
                    />
                </View>
            </ScrollView>
        );
    }

});

const mineStyles = StyleSheet.create({
    ScrollViewStyle: {
        flex: 1,
        backgroundColor: '#fafafa',
    },

});
module.exports = XMGMine;