/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    DeviceEventEmitter,
} from 'react-native';
import  ThemFactory from './dao/ThemFactory'
export default class BaseComponent extends Component {
    constructor(props) {
        super(props);
        this.themFactory=new ThemFactory();
        this.state = {
            them:this.props.them,
        };
    }

    componentDidMount() {
       this.themListener = DeviceEventEmitter.addListener("changeThem",
            (action,params)=>this._onChangeThem(action,params));
    }
    _onChangeThem(action,params){
        if(action==="changeThemAction"){
            this.changeThem(params);
        }
    }

    componentWillUnmount() {
        if(this.themListener){
           this.themListener.remove();
        }
    }
    changeThem(color){
        if(!color)return ;
        this.themFactory.setThem(color);
        this.themFactory.getTheme().then((data)=>{
            this.them=data;
            this.setState({
                them:this.them,
            });
        })
    }
}
