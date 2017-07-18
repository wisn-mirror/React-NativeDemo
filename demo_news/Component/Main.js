import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TabNavigatorItem from "react-native-tab-navigator/TabNavigatorItem";
var Home = require('./Home.js');
var Message = require('./Message.js');
var Discover = require('./Discover.js');
var Profile = require('./Profile.js');
const Main = React.createClass({
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
                    <Image/>
                    <Text style={styles.centerTitleViewStyle}>新闻</Text>
                    <Image/>
                </View>
                <TabNavigator
                    tabBarstyle={{height: 100, overflow: 'hidden', color: 'red'}}
                    sceneStyle={{paddingBottom: 0}}>
                    <TabNavigatorItem
                        selected={this.state.selectedTab == 'home'}
                        title="home"
                        renderIcon={() => <Image style={ styles.imageIcon }
                                                 source={require('../image/tabbar_home.png')}/>}
                        renderSelectedIcon={() => <Image style={ styles.imageIcon }
                                                         source={require('../image/tabbar_home_highlighted.png')}/>}
                        onPress={() => this.setState({selectedTab: 'home', title: 'home'})}>
                        <Navigator
                            initialRoute={
                                {
                                    component: Home
                                }
                            }
                            configureScene={() => {
                                return Navigator.SceneConfigs.HorizontalSwipeJump;
                            }}
                            renderScene={(route, navigator) => {
                                let Component = route.component;
                                if (route.component) {
                                    return <Component {...route.params} navigator={navigator}/>
                                }
                            }
                            }/>
                        {/*<Home/>*/}
                    </TabNavigatorItem>
                    <TabNavigatorItem
                        selected={this.state.selectedTab == 'message'}
                        title="message"
                        renderIcon={() => <Image style={ styles.imageIcon }
                                                 source={require('../image/tabbar_message_center.png')}/>}
                        renderSelectedIcon={() => <Image style={ styles.imageIcon }
                                                         source={require('../image/tabbar_message_center_highlighted.png')}/>}
                        onPress={() => this.setState({selectedTab: 'message', title: 'message'})}>
                        <Message/>
                    </TabNavigatorItem>
                    <TabNavigatorItem
                        selected={this.state.selectedTab == 'discover'}
                        title="discover"
                        renderIcon={() => <Image style={ styles.imageIcon }
                                                 source={require('../image/tabbar_discover.png')}/>}
                        renderSelectedIcon={() => <Image style={ styles.imageIcon }
                                                         source={require('../image/tabbar_discover_highlighted.png')}/>}
                        onPress={() => this.setState({selectedTab: 'discover', title: 'discover'})}>
                        <Discover/>
                    </TabNavigatorItem>
                    <TabNavigatorItem
                        selected={this.state.selectedTab == 'profile'}
                        title="profile"
                        renderIcon={() => <Image style={ styles.imageIcon }
                                                 source={require('../image/tabbar_profile.png')}/>}
                        renderSelectedIcon={() => <Image style={ styles.imageIcon }
                                                         source={require('../image/tabbar_profile_highlighted.png')}/>}
                        onPress={() => this.setState({selectedTab: 'profile', title: 'profile'})}>
                        <Profile/>
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
    imageIcon: {
        height: 24,
        width: 24,
    }
    /*  centerContentStyle1: {
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
     },*/
});
module.exports = Main;