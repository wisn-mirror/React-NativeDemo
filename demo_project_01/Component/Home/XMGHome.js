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
    TouchableOpacity,
} from 'react-native';

var HomeDetial=require('./XMGHomeDetial')
var XMGHome = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>this.gotoDetial()}>
                <Text style={styles.welcome}>Home
                </Text>
                </TouchableOpacity>
            </View>
        );
    },
    gotoDetial(){
       this.props.navigator.push(
           {
               component:HomeDetial,
               name:'详情',
           }
       )
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
module.exports = XMGHome;