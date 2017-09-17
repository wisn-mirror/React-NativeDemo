/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';

import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Two from "./Two";
import BaseComponent from "../BaseComponent"

export default class One extends BaseComponent {
    constructor(props) {
        super(props);
        console.log("coldddor" + this.props.them.bgcolor);
        console.log("coldddorddd:" + this.props.them.ThemStyles.OneOutViewStyle);
        this.state = {
            them:this.props.them,
        };
    }

    render() {
        return (
            <View style={[{
                flex: 1,
                alignItems: 'center',
            },,this.state.them.ThemStyles.OneOutViewStyle]}>
                <Text style={{color: 'red', fontSize: 30}}>
                    one
                </Text>
                <TouchableOpacity onPress={() => this._onPress()}>
                    <Text style={{color: 'red', fontSize: 30}}>Two</Text>
                </TouchableOpacity>
            </View>
        );
    }

    _onPress() {
        this.props.navigator.push(
            {
                component: Two,
                props: {
                    ...this.props,
                    them:this.state.them,
                }
            }
        )
    }
}

