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

} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TabNavigatorItem from "react-native-tab-navigator/TabNavigatorItem";
const H = React.createClass({
    getInitialState(){
        return ({
            selectedTab: 'home',
            title: 'home',
        });
    }
    ,
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleStyle}>
                    <Text style={styles.centerTitleViewStyle}>你懂的新闻</Text>
                </View>
                <TabNavigator
                    tabBarstyle={{height: 100, overflow: 'hidden', color: 'red'}}
                    sceneStyle={{paddingBottom: 0}}>
                    <TabNavigatorItem
                        selected={this.state.selectedTab == 'home'}
                        title="home"
                        renderIcon={() => <Image style={ styles.imageIcon }
                                                 source={require('./image/tabbar_home.png')}/>}
                        renderSelectedIcon={() => <Image style={ styles.imageIcon }
                                                         source={require('./image/tabbar_home_highlighted.png')}/>}
                        onPress={() => this.setState({selectedTab: 'home', title: 'home'})}>
                        <View style={styles.centerContentStyle1}>
                            <Text>1111</Text>
                        </View>
                    </TabNavigatorItem>
                    <TabNavigatorItem
                        selected={this.state.selectedTab == 'message'}
                        title="message"
                        renderIcon={() => <Image style={ styles.imageIcon }
                                                 source={require('./image/tabbar_message_center.png')}/>}
                        renderSelectedIcon={() => <Image style={ styles.imageIcon }
                                                         source={require('./image/tabbar_message_center_highlighted.png')}/>}
                        onPress={() => this.setState({selectedTab: 'message', title: 'message'})}>
                        <View
                            style={styles.centerContentStyle2}>
                            <Text>1111</Text>
                        </View>
                    </TabNavigatorItem>
                    <TabNavigatorItem
                        selected={this.state.selectedTab == 'discover'}
                        title="discover"
                        renderIcon={() => <Image style={ styles.imageIcon }
                                                 source={require('./image/tabbar_discover.png')}/>}
                        renderSelectedIcon={() => <Image style={ styles.imageIcon }
                                                         source={require('./image/tabbar_discover_highlighted.png')}/>}
                        onPress={() => this.setState({selectedTab: 'discover', title: 'discover'})}>
                        <View style={styles.centerContentStyle3}>
                            <Text>1111</Text>
                        </View>
                    </TabNavigatorItem>
                    <TabNavigatorItem
                        selected={this.state.selectedTab == 'profile'}
                        title="profile"
                        renderIcon={() => <Image style={ styles.imageIcon }
                                                 source={require('./image/tabbar_profile.png')}/>}
                        renderSelectedIcon={() => <Image style={ styles.imageIcon }
                                                         source={require('./image/tabbar_profile_highlighted.png')}/>}
                        onPress={() => this.setState({selectedTab: 'profile', title: 'profile'})}>
                        <View style={styles.centerContentStyle4}>
                            <Text>1111rewqrewq</Text>
                        </View>
                    </TabNavigatorItem>
                </TabNavigator>
            </View>
        );
    }

});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
    }, titleStyle: {
        backgroundColor: 'white',
        height: 30,
        justifyContent: 'center',
    }, centerTitleViewStyle: {
        textAlign: 'center',
    },
    centerContentStyle1: {
        flex: 1,
        backgroundColor: 'yellow',

    }, centerContentStyle2: {
        flex: 1,
        backgroundColor: 'green',

    }, centerContentStyle3: {
        flex: 1,
        backgroundColor: 'blue',

    }, centerContentStyle4: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'flex-start',


    }, imageIcon: {
        height: 24,
        width: 24,
    }

});

AppRegistry.registerComponent('H', () => H);
