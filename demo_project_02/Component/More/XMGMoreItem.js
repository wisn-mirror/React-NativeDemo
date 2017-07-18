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


var XMGMoreItem = React.createClass({
    getDefaultProps(){
        return {
            title:'',
            isSwitch:false,
            rightTitle:'',
        }
    },
    getInitialState(){
      return {
        isOn:false,
      }
    },
    render() {
        return (
            <TouchableOpacity onPress={()=>this.onPressSetting()}>
            <View style={MoreItemStyle.navbarStyle}>
                <Text style={MoreItemStyle.navTextStyle}>{this.props.title}</Text>
                {this.getRightView()}
            </View>
            </TouchableOpacity>
        );
    },
    onPressSetting(){
        Alert.alert('Item',this.props.title);
    },
    getRightView(){
        if(this.props.isSwitch){
            return (
                <Switch value={this.state.isOn===true} onValueChange={()=>this.setState({
                   isOn:!this.state.isOn,
                })}/>
            );
        }else{
            return (
            <View style={MoreItemStyle.rightViewText}>
                {this.getRightTextView()}
                <Image source={{uri:'icon_cell_rightArrow'}} style={MoreItemStyle.navImageStyle}/>
            </View>
            );
        }
    },
    getRightTextView(){
        if(this.props.rightTitle.length>0){
            return (
                <Text style={{color:'gray',fontSize:12, marginRight:5}}>{this.props.rightTitle}</Text>
            );
        }
    },
});

const MoreItemStyle = StyleSheet.create({
    navbarStyle:{
        flexDirection:'row',
        height:44,
        backgroundColor:'white',
        alignItems:'center',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,
        justifyContent:'space-between',
        paddingLeft:10,
        paddingRight:10,
    },
    rightViewText:{
        flexDirection:'row',
        alignItems:'center',
    },
    navTextStyle:{
        color:'#353535',
    },
    navImageStyle:{
        width: Platform.OS=='iso' ? 10:8,
        height: Platform.OS=='iso' ? 13:13,
        marginRight:5,
    }
});
module.exports = XMGMoreItem;