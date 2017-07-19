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


var XMGMineItem = React.createClass({
    getDefaultProps(){
        return {
            icon:'',
            title: '',
            isSwitch: false,
            rightTitle: '',
            rightIcon:'',

        }
    },
    getInitialState(){
        return {
            isOn: false,
        }
    },
    render() {
        return (
            <TouchableOpacity onPress={() => this.onPressSetting()}>
                <View style={MimeItemStyle.navbarStyle}>
                    <View style={MimeItemStyle.navbarLeftStyle}>
                        <Image source={{uri:this.props.icon}} style={MimeItemStyle.iconStyle}/>
                        <Text style={MimeItemStyle.navTextStyle}>{this.props.title}</Text>
                    </View>
                    {this.getRightView()}
                </View>
            </TouchableOpacity>
        );
    },
    onPressSetting(){
        Alert.alert('Item', this.props.title);
    },
    getRightView(){
        if (this.props.isSwitch) {
            return (
                <Switch value={this.state.isOn === true} onValueChange={() => this.setState({
                    isOn: !this.state.isOn,
                })}/>
            );
        } else {
            return (
                <View style={MimeItemStyle.rightViewText}>
                    {this.getRightTextView()}
                    <Image source={{uri: 'icon_cell_rightArrow'}} style={MimeItemStyle.navImageStyle}/>
                </View>
            );
        }
    },
    getRightTextView(){
        if (this.props.rightTitle.length > 0) {
            return (
                <Text style={{color: 'gray', fontSize: 12, marginRight: 5}}>{this.props.rightTitle}</Text>
            );
        }else if(this.props.rightIcon.length>0){
            return (
                <Image source={{uri:this.props.rightIcon}} style={{width:28,height:14, marginRight: 5}}/>
            );
        }

    },
});

const MimeItemStyle = StyleSheet.create({
    navbarStyle: {
        flexDirection: 'row',
        height: 44,
        backgroundColor: 'white',
        alignItems: 'center',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 0.5,
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    navbarLeftStyle:{
        flexDirection:'row',
        alignItems:"center"

    },
    iconStyle:{
        width: Platform.OS == 'iso' ? 30 : 30,
        height: Platform.OS == 'iso' ? 27 : 27,
    },
    rightViewText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    navTextStyle: {
        color: '#353535',
        marginLeft:5,
        fontSize:12,
    },
    navImageStyle: {
        width: Platform.OS == 'iso' ? 10 : 8,
        height: Platform.OS == 'iso' ? 13 : 13,
        marginRight: 5,
    }
});
module.exports = XMGMineItem;