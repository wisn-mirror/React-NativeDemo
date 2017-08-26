/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    requireNativeComponent,
    processColor,
    Alert,
    DeviceEventEmitter,
    ToastAndroid,
} from 'react-native';
import {RnModule} from "../../index.android";
import RCTCircle from "./Circle";
import MyTextView from "./component/MyTextView";

export default class demo_Native extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this._onChange = this._onChange.bind(this);
    }

    _onChange(event) {
        Alert.alert(""+event.nativeEvent.message);
        // if (!this.props.onChangeMessage) {
        //     return;
        // }
        // this.props.onChangeMessage(event.nativeEvent.message);
    }
    componentDidMount() {
        this.listener = DeviceEventEmitter.addListener("topChange", (e) => {
            Alert.alert("eee"+event.nativeEvent.message);
        })
    }

    componentWillUnmount() {
        this.listener.remove();
    }

    _onPressShowToast() {
        RnModule.showToast();
    }

    _onPressStartNative() {
        RnModule.startNativeTest();
    }

    render() {
        return (
            <View style={styles.container}>
                <MyTextView
                    {...this.props}
                    style={{width: 100, height: 100}}
                    color={processColor('#fc83ff')}
                    textsize={20}
                    text='你好，TextView'
                     onChangeMessage={(event)=>this._onChange(event)}
                    // onChangeMessage={(event)=>{
                    //     ToastAndroid.show(event.nativeEvent.message, ToastAndroid.SHORT);
                    // }}
                />
                <RCTCircle
                    style={{width: 100, height: 100}}
                    color={processColor('#ff0000')}
                    radius={50}
                />
                <TouchableOpacity onPress={() => this._onPressShowToast()}>
                    <Text style={{marginTop: 30, fontSize: 40}}>show Native toast</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._onPressStartNative()}>
                    <Text style={{marginTop: 30, fontSize: 40}}>start Native test</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


