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
    TouchableOpacity,
    ScrollView,
} from 'react-native';

var XMGHomeTopListView = require('./XMGHomeTopListView.js');
var TopViewData = require('../../LocalData/TopMenu.json')
var Dimensions = require('Dimensions');
var Swidth = Dimensions.get('window').width;
var XMGHomeTopView = React.createClass({
    getInitialState(){
        return {
            indexPage: 0,
        }
    },
    render() {
        return (
            <View style={homeTopViewStyle.container}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    onMomentumScrollEnd={this.onMomentumScrollEndListener}
                    showsHorizontalScrollIndicator={false}>
                    {this.getTopView()}
                </ScrollView>
                <View style={homeTopViewStyle.indicatorStyle}>
                    {this.getrenderIndicator()}
                </View>
            </View>
        );
    },
    getrenderIndicator(){
        var views = [], styles;
        for (var i = 0; i < 2; i++) {
            styles = (i === this.state.indexPage) ? {color: 'orange'} : {color: 'gray'};
            views.push(
                <Text key={i} style={ [{marginLeft: 5, fontSize: 24}, styles]}>&bull;</Text>
            );
        }
        return views;
    },
    onMomentumScrollEndListener(event){
        var currentPage = Math.floor(event.nativeEvent.contentOffset.x / Swidth);
        this.setState({
            indexPage: currentPage,
        });
    },

    getTopView(){
        var views = [];
        var data = TopViewData.data;
        for (var i = 0; i < data.length; i++) {
            views.push(
                <XMGHomeTopListView key={i}
                                    dataArray={data[i]}
                />
            );
        }
        return views;
    },

    gotoHome(){
        this.props.navigator.pop();
    }
});

const homeTopViewStyle = StyleSheet.create({
    container: {
        //backgroundColor:"red",
    },
    indicatorStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 10,
        backgroundColor: 'white',
    },

    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
module.exports = XMGHomeTopView;