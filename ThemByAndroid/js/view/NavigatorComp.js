/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Navigator from 'react-native-deprecated-custom-components'
var NavigatorComponent1 = require('./NavigatorComponent1');
export default class NavigatorComp extends Component {
    render() {
        return (<Navigator.Navigator
                initialRoute={{
                    name: 'NavigatorComponent1',
                    component: NavigatorComponent1
                }}
                configureScene={() => {
                    return Navigator.Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.props} navigator={navigator}/>;
                }}/>);
    }
}
