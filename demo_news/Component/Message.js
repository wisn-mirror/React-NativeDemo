/**
 * Created by wisn on 2017/7/14.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,

} from 'react-native';
const Message = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                <Text>Message</Text>
            </View>
        );
    }

});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
    }
});
module.exports = Message;