/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput,

} from 'react-native';

export default class C extends Component {
    render(){
        return (
            <View style={styles.container} >
                <TextInput
                    style={ styles.inputStyle}
                    // value='hello wisn'
                    // keyboardType={'numeric'}
                    keyboardType={'number-pad'}
                />
                <TextInput
                    style={ styles.inputStyle}
                    multiline={true}
                    defaultValue='wisn'
                />
                <TextInput
                    style={ styles.inputStyle}
                    editable={false}
                    defaultValue='wisn'
                />
                <TextInput
                    style={ styles.inputStyle}
                    editable={true}
                    multiline={true}
                    maxLength={4}
                    placeholder={'默认xxxx'}
                />
                <TextInput
                    style={ styles.inputStyle}
                    // password={true}
                    secureTextEntry={true}
                    placeholder={"请输入密码"}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    inputStyle:{
        width:300,
        height:50,
        marginTop:10,
        backgroundColor:"#fff",
        //边框
        borderWidth:2,
        borderColor:"green",
    }
});

AppRegistry.registerComponent('C', () => C);
