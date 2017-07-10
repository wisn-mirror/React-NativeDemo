/**
 * Created by wisn on 2017/7/10.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,

} from 'react-native';


class QQLoginView extends Component {
    render() {
        return (
            <View style={loginstyles.container}>
                <Image style={loginstyles.image_icon}
                       source={{uri: 'https://avatars0.githubusercontent.com/u/10184291?v=3&u=6bcb2b4b6beb4ecc6b1d55a4fbb55afa0863f715&s=400'}}/>
                {/*<Image style={loginstyles.image_icon} source={require('./img/icon.png')}/>*/}
                <TextInput style={loginstyles.textInputStyle} placeholder={'请输入账号'}/>
                <TextInput style={loginstyles.textInputStyle} placeholder={'请输入密码'} secureTextEntry={true}
                           password={true}/>
                <TouchableOpacity activeOpacity={0.5}>
                    <View style={loginstyles.loginbtn} onPress={this.renderPress()}>
                        <Text style={{color: 'white'}}>登录</Text>
                    </View>
                </TouchableOpacity>
                <View style={loginstyles.loginOtherOperation}>
                    <Text style={{color: "#4db7f6"}}>无法登录</Text>
                    <Text style={{color: "#4db7f6"}}>新用户</Text>
                </View>
                <View style={loginstyles.otherlogin}>
                    <Text>其他方式登录</Text>
                    <Image style={loginstyles.image_other} source={require('./img/icon3.png')}/>
                    <Image style={loginstyles.image_other} source={require('./img/icon7.png')}/>
                    <Image style={loginstyles.image_other} source={require('./img/icon8.png')}/>
                </View>
            </View>
        );
    }
    //按下鼠标时
    renderPress(){
        // console.log('press')
        // Alert.alert('press');
    }
}

const loginstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: 'column',
        alignItems: 'center',
    },
    textInputStyle: {
        height: 45,
        width: 500,
        backgroundColor: '#fff',
        textAlign: 'center',
        marginBottom: 2,
        marginLeft: 20,
        marginRight: 20,
    },
    image_icon: {
        marginTop: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 0.5,
        borderColor: "#4db7f6",
        marginBottom: 30,
    },
    loginbtn: {
        width: 320,
        height: 40,
        backgroundColor: '#4db7f6',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginBottom: 6,
    },
    loginOtherOperation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:'#ff0',
        width: 320,
    },
    otherlogin: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 320,
        marginBottom: 3,
        position: 'absolute',
        bottom: 10,
    },
    image_other: {
        width: 20,
        height: 20,
        marginLeft: 3,
        borderRadius: 4,

    }
});

module.exports = QQLoginView;
