
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Navigator from 'react-native-deprecated-custom-components'

import One from "./page/One"

export default class Gift extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {

    }
    render() {
        this.them={
            bgcolor: "#ffffff",
            ThemStyles: StyleSheet.create({
                OneOutViewStyle: {
                    backgroundColor: "#ffffff",
                }
            }),
        }
        return (
            <Navigator.Navigator
                initialRoute={{
                    name: 'Setup', component: One,
                    props: {
                        ...this.props,
                        them:this.them,
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