/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Navigator,
} from 'react-native';
var Launcher = require('./Component/Main/XMGMainLaunchImage');
export default class I extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{
                    name: 'Launcher',
                    component: Launcher,
                }}
                configureScene={() => {
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>;
                }}
            />
        );
    }
}


AppRegistry.registerComponent('I', () => I);
