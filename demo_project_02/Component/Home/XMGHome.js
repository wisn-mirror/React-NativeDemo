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
    TextInput,
    Image,
    TouchableOpacity,
    Platform,
    Alert,
} from 'react-native';

var HomeDetial = require('./XMGHomeDetial')
var XMGHome = React.createClass({
    render() {
        return (
            <View style={homeStyles.container}>
                {this.renderNavBar()}
                <TouchableOpacity
                    >
                    <Text style={homeStyles.welcome}>Home
                    </Text>
                </TouchableOpacity>
            </View>
        );
    },
    renderNavBar(){
        return (
            <View style={homeStyles.navBarStyle}>
                <Text style={homeStyles.topNavBarTextStyle}>位置</Text>
                <TextInput
                    placeholder='请输入搜索内容'
                    placeholderTextColor='grey'
                    selectTextOnFocus={true}
                    underlineColorAndroid='white'
                    style={homeStyles.topInputStyle}/>
                <View style={homeStyles.navBarRightImageStyle}>
                    <TouchableOpacity onPress={()=>this.onPressMessage()}>
                        <Image source={{uri: 'icon_homepage_message'}} style={homeStyles.navBarImageStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>this.onPressScan()}>
                        <Image source={{uri: 'icon_homepage_scan'}} style={homeStyles.navBarImageStyle}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    },
    onPressMessage(){
        Alert.alert('message','Message1');
    },
    onPressScan(){
        this.props.navigator.push({
                component: HomeDetial,
                name: '详情',
            }
        )
    }
});

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    navBarStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ef5100',
        height: 50,
        padding: 5,
        paddingLeft: 10,
    },
    topNavBarTextStyle: {
        color: 'white',
    },
    topInputStyle: {
        color: '#ef5100',
        flex: 1,
        marginLeft: 5,
        backgroundColor: 'white',
        borderRadius: 13,
        height: 28,
        marginTop: 4,
        paddingBottom: 7,
        textAlign: 'left',
        fontSize: 12,
        paddingLeft: 15,
    },
    navBarRightImageStyle: {
        flexDirection: 'row',
    },
    navBarImageStyle: {
        width: Platform.OS=='iso' ? 30:22,
        height: Platform.OS=='iso' ? 30:22,
        marginLeft: 5,
    },

});
module.exports = XMGHome;