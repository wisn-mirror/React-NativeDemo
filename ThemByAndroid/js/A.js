import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    NativeModules,
    Alert,
    TextInput,
    TouchableHighlight
} from 'react-native';

const MainModule = NativeModules.MainModule;

export default class A extends Component {
    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this);
        this.state = {};
    }

    render() {
        return (
            <View>
                <Text>gift</Text>
                <Text>helloWorld</Text>
                <Text>helloWorld</Text>
                <TextInput/>
                <TouchableHighlight onPress={() => this._onPress()}>
                    <Text style={{color: 'red', fontSize: 30}}>showToast </Text>
                </TouchableHighlight>
            </View>
        );
    }

    _onPress() {
        Alert.alert("aaa");
        MainModule.showToast();
    }
}