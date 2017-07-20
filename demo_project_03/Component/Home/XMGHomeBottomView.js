/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    ListView,
    Alert,
} from 'react-native';

var Dimensions = require('Dimensions');
var Swidth = Dimensions.get('window').width;
var XMGHomeCenterViewItem=require('./XMGHomeCenterViewItem.js');
var XMGHomeBottomView = React.createClass({
    getDefaultProps(){
        return {
            DataArray:[],
            colors:['#fd970b','#fec6d0','#007e00','#6e0070']
        }
    },
    getInitialState(){
        var ds=new ListView.DataSource({
            rowHasChanged:(row1,row2)=> row1!=row2
        });
        return {
            dataSource:ds.cloneWithRows(this.props.DataArray),
        };
    },
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRowItem}
                contentContainerStyle={XMGHomeBottomViewStyle.contentViewStyle}
            />
        );
    },
    renderRowItem(rowData ,sectionID,rowID,hightlightRow){
        return (
            <XMGHomeCenterViewItem
                title={rowData.title}
                subTitle={rowData.subTitle}
                rightImage={rowData.hotImage}
                titleColor={this.props.colors[rowID]}
                callBackFunc={this.callBackFuncAlert}
            />
        );
    },
    callBackFuncAlert(title){
        Alert.alert(title,title);
    }

});

const XMGHomeBottomViewStyle = StyleSheet.create({
    contentViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor:'white',
        height:150,
    }
});
module.exports = XMGHomeBottomView;