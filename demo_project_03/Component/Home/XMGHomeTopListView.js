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
    TouchableOpacity,
    ScrollView,
    ListView,
    Alert,
} from 'react-native';

var Dimensions = require('Dimensions');
var Swidth = Dimensions.get('window').width;
var XMGHomeTopListView = React.createClass({
    getDefaultProps(){
        return {
            dataArray: [],
        }
    },
    getInitialState(){
        var ds = new ListView.DataSource(
            {
                rowHasChanged: (row1, row2) => row1 != row2
            }
        );
        return {
            dataSource: ds.cloneWithRows(this.props.dataArray),
    }
    },
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRowItem}
                contentContainerStyle={homeTopListViewStyle.contentViewStyle}
                scrollEnabled={false}
            />
        );
    },
    renderRowItem(rowData){
        return (
            <TouchableOpacity activeOpacity={0.5} style={homeTopListViewStyle.topViewStyle} onPress={()=>this.onPressTopViewItem()}>
            <View style={homeTopListViewStyle.topViewStyle}>
                <Image source={{uri:rowData.image}} style={homeTopListViewStyle.topImageView}/>
                <Text style={{fontSize:12 ,marginTop:2}}>{rowData.title}</Text>
            </View>
            </TouchableOpacity>
        );
    },
    onPressTopViewItem(){
          Alert.alert('item','item');
    }
});

const homeTopListViewStyle = StyleSheet.create({
    topImageView: {
        height:52,
        width:52,
    },
    contentViewStyle:{
        flexDirection:'row',
        justifyContent:'flex-start',
        flexWrap:'wrap',
        backgroundColor:'white',
        width:Swidth,

    },
    indicatorStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 10,
        backgroundColor: 'white',
    },
    topViewStyle:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width:Swidth/5,
        height:80,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
module.exports = XMGHomeTopListView;