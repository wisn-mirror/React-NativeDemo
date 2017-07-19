/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
} from 'react-native';

var XMGMain = require('./XMGMain');
var Launcher = React.createClass({
    render() {
        return (
            <Image source={{uri:'launchimage'}} style={launcherStyles.launcheImageStyle}/>
        );
    },
    componentDidMount(){
        //定时器
        setTimeout(()=>{
            this.props.navigator.replace({
                component:XMGMain,
                name:'主页',
            })
        },10);
    }

});

const launcherStyles = StyleSheet.create({
    launcheImageStyle:{
        flex:1,
    }
});
module.exports = Launcher;