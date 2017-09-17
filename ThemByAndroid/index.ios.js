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

import One from "./js/page/One"
import ThemFactory from "./js/dao/ThemFactory"

export default class ThemByAndroid extends Component {
    componentDidMount() {
        new ThemFactory().getTheme().then((data)=>{
            this.them=data;
        })
    }
    render() {
        return (
            <Navigator.Navigator
                initialRoute={{
                    name: 'One', component: One,
                    props: {
                        them:this.them,
                        a:333,
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
