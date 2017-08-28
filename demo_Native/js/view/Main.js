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
    Image,
    ToastAndroid,
    Dimensions,
} from 'react-native';
import {RnModule} from "../../index.android";
import RCTCircle from "./Circle";
import MyTextView from "./component/MyTextView";
import PercentageView from "./component/PercentageView";
import DashLine from "./component/DashLine";

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class demo_Native extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this._onChange = this._onChange.bind(this);
    }

    _onChange(event) {
        Alert.alert("" + event.nativeEvent.message);
        // if (!this.props.onChangeMessage) {
        //     return;
        // }
        // this.props.onChangeMessage(event.nativeEvent.message);
    }

    componentDidMount() {
        this.listener = DeviceEventEmitter.addListener("topChange", (e) => {
            Alert.alert("eee" + event.nativeEvent.message);
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

    getItemView(title, lab1, lab2, unitStr, Percent, labColor, bgImage) {
        return (
            <Image resizeMode='stretch' style={{marginLeft: 10, marginRight: 10, width: SCREEN_WIDTH - 20, height: 140}}
                   source={bgImage}>
                <View style={{flexDirection: "column", padding: 10, justifyContent: 'center'}}>
                    <Text style={[styles.fontStyle]}>{title}</Text>
                    <Text style={[styles.fontStyle, {
                        color: "#aeaeae",
                        textAlign: 'center',
                        fontSize: 14,
                        marginTop: 5
                    }]}>(单位：{unitStr})</Text>
                    <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 2}}>
                        <View style={{flexDirection: "column", justifyContent: 'center'}}>
                            <Text style={[styles.fontStyle, {
                                textAlign: 'right',
                                height: 35,
                                paddingTop: 6
                            }]}>{lab1}</Text>
                            <Text style={[styles.fontStyle, {height: 35, paddingTop: 6}]}>{lab2}</Text>
                        </View>
                        <View style={{width: 0.5, height: 80, backgroundColor: '#251924', marginLeft: 4}}/>
                        <View style={{flexDirection: "column"}}>
                            <PercentageView
                                style={{width: 200, height: 32, backgroundColor: "#fefefe"}}
                                PercentStyle={{backgroundColor: labColor}}
                                Percent={Percent}
                            />
                            <PercentageView
                                style={{width: 200, height: 32, backgroundColor: "#fefefe"}}
                                PercentStyle={{backgroundColor: labColor}}
                                Percent={Percent}
                            />
                        </View>
                    </View>
                </View>
            </Image>);
    }

    render() {
        return (
            <View style={styles.container}>
                {this.getItemView("终端摆放次数达成率", "应拜访终端数", "实际拜访终端数"
                    , "次数", 0.1, "#fae62e", require('./component/ji_background_top.png'))}
                <DashLine
                    style={{width: SCREEN_WIDTH - 45, backgroundColor: 'white', marginLeft: 20, marginRight: 20}}/>
                {this.getItemView("终端摆放次数达成率", "应拜访终端数", "实际拜访终端数"
                    , "次数", 0.2, "#fae62e", require('./component/ji_background_between.png'))}
                <DashLine
                    style={{width: SCREEN_WIDTH - 45, backgroundColor: 'white', marginLeft: 20, marginRight: 20}}/>
                {this.getItemView("终端摆放次数达成率", "应拜访终端数", "实际拜访终端数"
                    , "次数", 0.6, "#fae62e", require('./component/ji_background_bottom.png'))}
                {/*<MyTextView*/}
                {/*{...this.props}*/}
                {/*style={{width: 100, height: 100}}*/}
                {/*color={processColor('#fc83ff')}*/}
                {/*textsize={20}*/}
                {/*text='你好，TextView'*/}
                {/*onChangeMessage={(event) => this._onChange(event)}*/}
                {/*// onChangeMessage={(event)=>{*/}
                {/*//     ToastAndroid.show(event.nativeEvent.message, ToastAndroid.SHORT);*/}
                {/*// }}*/}
                {/*/>*/}
                {/*<RCTCircle*/}
                {/*style={{width: 100, height: 100}}*/}
                {/*color={processColor('#ff0000')}*/}
                {/*radius={50}*/}
                {/*/>*/}
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
        backgroundColor: '#cdffa9',
    },
    fontStyle: {
        color: "#251924", fontSize: 18,
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


