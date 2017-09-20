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
        this.state = {
            name:"aaa"
        };
    }

    render() {
        return (
            <View  style={{
                flex: 1,
                alignItems: 'center',
            }}>
                <Text>gift</Text>
                <Text>helloWorld</Text>
                <Text>helloWorld</Text>
                <Text>{this.state.name}</Text>
                <TouchableOpacity onPress={()=>{this._onPress()}}>
                    <Text style={{color: 'red', fontSize: 30}}>showToast </Text>
                </TouchableOpacity>
            </View>
        );
    }

    _onPress() {
        this.setState({name:"33"});
        console.log("ddddd");
        Alert.alert("aaa","DD");

       // MainModule.showToast();
    }
}