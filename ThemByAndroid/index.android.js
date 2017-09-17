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
    View
} from 'react-native';
import Navigator from 'react-native-deprecated-custom-components'

import Setup from "./js/Setup"

export default class ThemByAndroid extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    componentDidMount() {

    }
    render() {
        return (
            <Navigator.Navigator
                initialRoute={{
                    name: 'Setup', component: Setup,
                    props: {
                        ...this.props,
                    },
                }}
                configureScene={() => {
                    return Navigator.Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.props} navigator={navigator}/>;
                }}
            />);
    }
}

AppRegistry.registerComponent('ThemByAndroid', () => ThemByAndroid);
