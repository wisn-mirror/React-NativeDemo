import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
    NativeModules
} from 'react-native';
// import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../../index.android.js';

import Dimensions from 'Dimensions';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={loginstyles.container}>
                <ScrollView style={loginstyles.scrollViewStyle} showsVerticalScrollIndicator={true}>
                    <Image resizeMode='stretch' style={loginstyles.topImageStyle}
                           source={require("../loginimg/bg_logintop.png")}/>
                    <Image resizeMode='stretch' style={loginstyles.settingBottonStyle}
                           source={require("../loginimg/icon_setting.png")}/>
                    <View style={loginstyles.contentStyle}>
                        <Image style={loginstyles.inputImageStyle} resizeMode='stretch'
                               source={require("../loginimg/button_password.png")}>
                            <TextInput style={loginstyles.inputTextStyle} placeholder={'请输入账号'}
                                       selectTextOnFocus={true}
                                       underlineColorAndroid='transparent'/>
                            <Image resizeMode='stretch' style={loginstyle.iconStyle}
                                   source={require("../loginimg/icon_close.png")}/>
                        </Image>
                        <Image style={loginstyles.inputImageStyle} resizeMode='stretch'
                               source={require("../loginimg/button_password.png")}>
                            <TextInput style={loginstyles.inputTextStyle} placeholder={'请输入密码'}
                                       selectTextOnFocus={true}
                                       underlineColorAndroid='transparent'/>
                            <Image resizeMode='stretch' style={{marginLeft: 10, width: 15, height: 10}}
                                   source={require("../loginimg/icon_hide.png")}/>
                        </Image>
                        <TouchableOpacity activeOpacity={0.5} onPress={this._loginPress()}>
                            <Image style={loginstyles.loginButtonStyle} resizeMode='stretch'
                                   source={require("../loginimg/button_login.png")}/>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <Image resizeMode='stretch' style={loginstyles.bottomStyle} source={require("../loginimg/bg_bbno.png")}>
                    <Text style={loginstyles.bottomTextStyle}>©2016 SFA version:</Text>
                    <Text style={loginstyles.bottomTextStyle}>3.0</Text>
                </Image>
            </View>

        );
    }

    _loginPress() {

    }
}

const loginstyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    topImageStyle: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 2
    },
    contentStyle:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollViewStyle: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "white"
    },
    inputImageStyle: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: SCREEN_WIDTH - 130,
        height: 40,
        marginRight: 40,
        marginLeft: 40
    },
    iconStyle:{
        marginLeft: 10,
        width: 15,
        height: 15
    },
    inputTextStyle: {
        height: 35,
        width: SCREEN_WIDTH - 180,
        backgroundColor: 'transparent',
        marginLeft: 10,
        textAlign: 'left',
        marginTop: 8,
    },
    loginButtonStyle: {
        marginTop: 26,
        width: SCREEN_WIDTH - 130,
        height: 40
    },
    bottomStyle: {
        width: SCREEN_WIDTH,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 20,
        // position: 'absolute',
    },
    bottomTextStyle: {
        color: "#252525",
    },
    settingBottonStyle: {
        width: 35,
        height: 35,
        marginRight: 20,
        right: 10,
        position: 'absolute',
        marginTop: 20
    }

});
