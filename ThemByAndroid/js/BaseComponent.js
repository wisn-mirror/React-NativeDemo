import React, {Component} from 'react';
import {
    BackHandler,
    Dimensions,
    DeviceEventEmitter,
} from 'react-native';

const window = Dimensions.get('window');

export default class BaseComponent extends Component {
    constructor(props) {
        super(props);
    }

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

    //返回 ;//return  true 表示返回上一页  false  表示跳出RN
    onBackClicked = () => { // 默认 表示跳出RN
        return false;
    }
    updateSkin(params){

    }

    /*
     //复制此方法到 继承该组件的地方即可
     //BACK物理按键监听
     onBackClicked = () => {
         const {navigator} = this.props;
         if (navigator && navigator.getCurrentRoutes().length > 1) {
             navigator.pop();
             return true;//true 表示返回上一页
         }
         return false; // 默认false  表示跳出RN
     }
     */
}