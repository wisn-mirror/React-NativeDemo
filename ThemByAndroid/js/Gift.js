
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Navigator from 'react-native-deprecated-custom-components'

import Setup from "./Setup"

export default class Gift extends Component {
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