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


var XMGHomeDetial = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>this.gotoHome()}
                >
                <Text style={styles.welcome}>XMGHomeDetial
                </Text>
                </TouchableOpacity>
            </View>
        );

    },
    gotoHome(){
        this.props.navigator.pop();
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
module.exports = XMGHomeDetial;