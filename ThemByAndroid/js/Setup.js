/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import One from "./page/One";
import BaseComponent from "./BaseComponent"
import ThemFactory from "./dao/ThemFactory"

export default class Setup extends BaseComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        new ThemFactory().getTheme().then((data)=>{
            console.log("data:"+data.bgcolor);
            this.them=data;
            this.props.navigator.push(
                {
                    component: One,
                    props: {
                        // ...this.props,
                        them:this.them,
                    }
                }
            )
        }).catch((error)=>{

        });
    }
    render() {
        return (<View></View>)
    }
}

