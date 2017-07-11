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
    //不可改变的
    getDefaultProps(){
        return {
            age:18,
        }
    },
    //可以改变的
    getInitialState(){
        return {
            title: '点击事件AAA',
            name:'wisn',
        }
    },

    render(){
        return (
            <View ref='topView' style={testStyle.constructor}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    // onPress={()=>this.activeEvent('点击')}
                    onPressIn={()=>this.activeEvent("按下")}
                    onPressOut={()=>this.activeEvent("抬起")}
                    onLongPress={()=>this.activeEvent("长按")}
                    >
                    <View>
                        <Text ref="eventPress">Press</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <Text>state:{this.state.title}</Text>
                    <Text>state:{this.state.name}</Text>
                    <Text>props:{this.props.age}</Text>
                </View>
            </View>
        );
    },
    activeEvent(Event){
        this.setState({
            title:Event,
            name:'改变了',
        })
        //拿到topView
        this.refs.topView;
        this.refs.eventPress;
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
