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
    Image,
    View,
    Platform,
    TouchableOpacity,
    WebView,
    Alert,
} from 'react-native';

var Dimensions = require('Dimensions');
var Swidth = Dimensions.get('window').width;
var XMGShop = React.createClass({
    getDefaultProps(){
        return {
            // url: 'http://i.meituan.com/shoppingmall/smDetail/4374715?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-3859'
            // url:'https://www.baidu.com'
            url:'https://github.com/'
        }
    },
    render() {
        return (
            <View style={XMGShopStyles.container}>
                {this.getShopView()}
                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.props.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                    style={{width:Swidth}}
                />
            </View>
        );
    },
    getShopView(){
        return (
            <View style={XMGShopStyles.outNavTopStyle}>
                <View style={XMGShopStyles.outTopViewStyle}/>
                <View style={XMGShopStyles.renderHeaderNavBar}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.locationPress()}>
                        <Image source={{uri: "icon_shop_local"}} style={XMGShopStyles.LeftImageStyle}/>
                    </TouchableOpacity>
                    <Text style={{color: 'gray', fontSize: 16}}>商家</Text>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.SearchPress()}>
                        <Image source={{uri: 'icon_shop_search'}} style={XMGShopStyles.RightImageStyle}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    },
    locationPress(){
        Alert.alert('location', 'location');
    },
    SearchPress(){
        Alert.alert('search', 'search');
    }
});

const XMGShopStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    renderHeaderNavBar: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    LeftImageStyle: {
        width: 24,
        height: 24,
        marginLeft: 10,
    },
    RightImageStyle: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    outTopViewStyle: {
        height: Platform.OS == "ios" ? 20 : 0,
        backgroundColor: '#ef5100',
        width: Swidth,

    },
    outNavTopStyle: {
        flexDirection: 'column',

    }


});
module.exports = XMGShop;