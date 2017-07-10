/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';

var C = React.createClass({
    getInitialState(){
        return {
            title: '点击事件AAA'
        }
    },

    render(){
        return (
            <View style={testStyle.constructor}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    // onPress={()=>this.activeEvent('点击')}
                    onPressIn={()=>this.activeEvent("按下")}
                    onPressOut={()=>this.activeEvent("抬起")}
                    onLongPress={()=>this.activeEvent("长按")}
                >
                <View>
                    <Text>Press</Text>
                </View>
                </TouchableOpacity>
                <View>
                    <Text>{this.state.title}</Text>
                </View>
            </View>
        );
    },
    activeEvent(Event){
        this.setState({
            title:Event
        });
    }


});
const testStyle = StyleSheet.create({
    constructor: {
        flex: 1,
        flexDirection: "column",
        justifyContent:'center',
        alignItems:'center',
    }

});


AppRegistry.registerComponent('C', () => C);
