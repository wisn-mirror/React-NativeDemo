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
    Platform,
    Image,
    Alert,
    TouchableOpacity,
} from 'react-native';

var XMGMineItem = require('./XMGMineItem');
var XMGMineCenterView = require('./XMGMineCenterView');
var Dimensions = require('Dimensions');
var Swidth = Dimensions.get('window').width;
var XMGMine = React.createClass({

    render() {
        return (
            <ScrollView style={mineStyles.ScrollViewStyle}>
                {this.getHeadView()}
                {this.getHeadBottomView()}
                <XMGMineItem
                    icon='collect'
                    title='我的订单'
                    rightTitle='查看全部订单'
                />
                <XMGMineCenterView />
                {this.mineGetMineView()}
            </ScrollView>
        );
    },
    getHeadBottomViewItem(){
        var itemView = [];
        var data = [
            {"count": 100, "name": "Wisn券"},
            {"count": 50, "name": "评价"},
            {"count": 10, "name": "收藏"}
        ]
        for (var i = 0; i < data.length; i++) {
            itemView.push(
                <TouchableOpacity key={i}
                                  onPress={() => this.HeadOnPress()} style={mineStyles.headtopTouchAbleTextStyle}>
                    <View style={mineStyles.headtopTextStyle}>
                        <Text style={{color: 'white', fontSize: 12}}>{data[i].count}</Text>
                        <Text style={{color: 'white', fontSize: 12}}>{data[i].name}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
        return itemView;
    },
    HeadOnPress(){
        Alert.alert('press', 'press');
    },
    getHeadBottomView(){
        return (
            <View style={mineStyles.headtopViewStyle}>
                {this.getHeadBottomViewItem()}
            </View>
        );
    },
    getHeadView(){
        return (
            <View style={mineStyles.headViewStyle}>
                <Image source={{uri: 'see'}} style={mineStyles.MinePhotoStyle}/>
                <Text style={{color: 'white', marginLeft: 10}}>Wisn的电商</Text>
                <Image source={{uri: 'avatar_vip'}} style={{height: 15, width: 15, marginLeft: 5}}/>
                <Image source={{uri: 'icon_cell_rightArrow'}} style={mineStyles.navImageStyle}/>
            </View>
        );
    },
    mineGetTopView(){
        return (
            <View>
                {this.get}
            </View>
        )
    }
    ,
    mineGetMineView(){
        return (
            <View>
                <View style={{marginTop: 10}}>
                    <XMGMineItem
                        icon='like'
                        title='账单'
                        rightTitle='账户余额：¥100'
                    />
                </View>
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
            </View>
        );
    }
});

const mineStyles = StyleSheet.create({
    headViewStyle: {
        height: 90,
        backgroundColor: "#fc4b1f",
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,

    },
    headtopViewStyle: {
        backgroundColor: "rgba(252,75,31,0.5)",
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
        height: 40,
        width: Swidth + 1,
    },
    headtopTouchAbleTextStyle:{
        flex: 1,
    },
    headtopTextStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: 'white',
    },
    ScrollViewStyle: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    MinePhotoStyle: {
        width: Platform.OS == 'iso' ? 50 : 50,
        height: Platform.OS == 'iso' ? 50 : 50,
        borderRadius: 25,
        marginLeft: 10,
    },
    navImageStyle: {
        width: Platform.OS == 'iso' ? 10 : 8,
        height: Platform.OS == 'iso' ? 13 : 13,
        right: 15,
        position: 'absolute',
        bottom: 30,
    }

});
module.exports = XMGMine;