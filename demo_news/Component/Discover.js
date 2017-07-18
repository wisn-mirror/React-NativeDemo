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
const Discover = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                <Text>Discover</Text>
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
module.exports = Discover;