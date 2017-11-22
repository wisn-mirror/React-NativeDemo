import React, {Component} from 'react';
import {
    BackHandler,
    Dimensions,
    DeviceEventEmitter,
} from 'react-native';

const window = Dimensions.get('window');

export default class BaseComponent extends Component {
    componentWillMount() {
        this.nativeChangeThemListener = DeviceEventEmitter.addListener("nativeChangeSkin",
            (params) => this.updateSkin(params));
        BackHandler.addEventListener("hardwareBackPress", this.onBackClicked);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackClicked);
        if (this.nativeChangeThemListener)
            this.nativeChangeThemListener.remove();
    }

    updateSkin(params){

    }

    onBackClicked = () => { // 默认 表示跳出RN
        return false;
    }
}