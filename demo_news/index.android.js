/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';
var Main=require('./Component/Main.js')
const H = React.createClass({

    render() {
        return (
            <Main/>
        );
    }

});

AppRegistry.registerComponent('H', () => H);
