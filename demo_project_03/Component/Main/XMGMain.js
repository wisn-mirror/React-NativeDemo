/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    Navigator,
} from 'react-native';

import  TabNavigator from 'react-native-tab-navigator';
var Home=require('../Home/XMGHome');
var Shop=require('../Shop/XMGShop');
var More=require('../More/XMGMore');
var Mine=require('../Mine/XMGMine');
var XMGMain = React.createClass({
    getInitialState(){
        return ({
            selectedTab: 'home',
        });
    },
    render() {
        return (
            <TabNavigator
                tabBarStyle={{ height: 55, overflow: 'hidden' }}
                sceneStyle={{ paddingBottom: 55 }} >
                {this. renderNavigatorItem('Home','home','icon_tabbar_homepage','icon_tabbar_homepage_selected','首页',Home)}
                {this. renderNavigatorItem('Shop','shop','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','商家',Shop)}
                {this. renderNavigatorItem('Mine','mine','icon_tabbar_mine','icon_tabbar_mine_selected','我的',Mine,'2')}
                {this. renderNavigatorItem('More','more','icon_tabbar_misc','icon_tabbar_misc_selected','更多',More)}
            </TabNavigator>
        );
    },
    renderNavigatorItem(title,selectedTab,renderIcon,renderSelectedIcon,componentName,component,badgeText){
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab ===selectedTab}
                title={title}
                renderIcon={() => <Image source={{uri: renderIcon}} style={mainStyles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri: renderSelectedIcon}} style={mainStyles.iconStyle}/>}
                onPress={() => this.setState({selectedTab: selectedTab})}
                selectedTitleStyle={mainStyles.selectedTitleStyle}
                badgeText={badgeText}
                // renderBadge:PropTypes.
                >
                <Navigator
                    initialRoute={{
                        name:componentName,
                        component:component,
                    }}
                    configureScene={()=>{
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator)=>{
                        let Component=route.component;
                        return <Component {...route.passProps} navigator={navigator}/>;
                    }
                    }
                />
            </TabNavigator.Item>
        );
    }
});

const mainStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    iconStyle: {
        width: Platform.OS==='ios' ? 30:25,
        height: Platform.OS==='ios' ? 30:25,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    selectedTitleStyle:{
        color:'#ef5100',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
module.exports = XMGMain;