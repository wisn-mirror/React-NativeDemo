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
                tabBarStyle={{ height: 50, overflow: 'hidden' }}
                sceneStyle={{ paddingBottom: 20 }}
            >
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_homepage'}} style={mainStyles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_homepage_selected'}}  style={mainStyles.iconStyle}/>}
                    badgeText="1"
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    <Navigator
                        initialRoute={{
                            name:'首页',
                            component:Home
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
                <TabNavigator.Item
                    selected={this.state.selectedTab ==='shop'}
                    title="Shop"
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_merchant_normal'}} style={mainStyles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_merchant_selected'}} style={mainStyles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'shop'})}>
                    <Navigator
                        initialRoute={{
                            name:'商家',
                            component:Shop
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
                <TabNavigator.Item
                    selected={this.state.selectedTab ==='mine'}
                    title="Mine"
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_mine'}} style={mainStyles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_mine_selected'}} style={mainStyles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'mine'})}>
                    <Navigator
                        initialRoute={{
                            name:'我的',
                            component:More
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
                <TabNavigator.Item
                    selected={this.state.selectedTab ==='more'}
                    title="More"
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_misc'}} style={mainStyles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_misc_selected'}} style={mainStyles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'more'})}>
                    <Navigator
                        initialRoute={{
                            name:'更多',
                            component:Mine
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
            </TabNavigator>
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
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
module.exports = XMGMain;