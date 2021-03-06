/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    DeviceEventEmitter,
} from 'react-native';
import {RnModule} from "../../index.android";
import MyImage from "./MyImage";
import LoginComponent from "./component/LoginComponent";

export default class NativeTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            message: "",
            event: "",
            headImageUri: null,
            sum: 0,

        };
    }

    componentDidMount() {
        this.listener = DeviceEventEmitter.addListener("android_Native_event", (e) => {
            this.setState(e)
        })
    }

    componentWillUnmount() {
        this.listener.remove();
    }

    async _onPressImage() {
        // this.setState({
        //     headImageUri: await RnModule.selectPhoto(),
        // })
        RnModule.selectPhoto()
            .then(result => {
                console.log("test" + result);
                if (result) {
                    this.setState({
                        headImageUri: result,
                    })
                } else {
                    this.setState({
                        message: "未选择",
                    })
                }
            })
            .catch(error => {
                console.log("error" + error);
                this.setState({
                    message: "error" + error,
                })
            })
    }

    _onPressEvent() {
        RnModule.startMessage();
    }

    _onPressAdd() {
        RnModule.callMathAdd(parseInt(this.state.sum), 1, (result) => this.setState(result));
    }

    _onPressMessage() {
        RnModule.getCallBack((result) => this.setState(result));
    }

    _onPressStopEvent() {
        RnModule.stopMessage();
    }


    async _onPressCallGamera() {
        RnModule.callCamera()
            .then(result => {
                if (result) {
                    this.setState({
                        headImageUri: result,
                    })
                } else {
                    this.setState({
                        message: "未选择",
                    })
                }
            })
            .catch(error => {
                this.setState({
                    message: "error" + error,
                })
            })
    }


    /*this.setState({                             console.log("error" + error);
   console.log("test" + result);

           headImageUri: await RnModule.callCamera(),
       })*/
    /*render() {
        return (<LoginComponent/>);
    }*/
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this._onPressAdd()}>
                    <Text style={{marginTop: 10, fontSize: 30}}>本地计算</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._onPressEvent()}>
                    <Text style={{marginTop: 10, fontSize: 30}}>开启event</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._onPressStopEvent()}>
                    <Text style={{marginTop: 10, fontSize: 30}}>停止event</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._onPressMessage()}>
                    <Text style={{marginTop: 10, fontSize: 30}}>回调消息</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._onPressImage()}>
                    <Text style={{marginTop: 10, fontSize: 30}}>调用相册</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._onPressCallGamera()}>
                    <Text style={{marginTop: 10, fontSize: 30}}>调用相机</Text>
                </TouchableOpacity>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <MyImage uri={this.state.headImageUri} imageStyle={{width: 120, height: 120}}/>
                    <Image source={{uri: this.state.headImageUri}} style={{width: 100, height: 100}}/>
                </View>
                <Text style={{marginTop: 10, fontSize: 20}}>{RnModule.name}回调消息:{this.state.message}</Text>
                <Text style={{marginTop: 10, fontSize: 20}}>{this.state.sum}原生event:{this.state.event}</Text>
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
