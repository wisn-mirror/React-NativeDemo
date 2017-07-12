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
    ListView,
    TouchableOpacity,
    Alert,
} from 'react-native';

//引入
var Dimensions = require('Dimensions');
var swidth = Dimensions.get('window').width;
var carData = require('./Car.json');//数组
var cols = 3;
var imageWidth = 120;
var mwidth = (swidth - imageWidth * cols) / (cols + 1);
const ListViewTop = React.createClass({
    getInitialState(){
        var getSectionData1 = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };
        var getRowData1 = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        }
        return {
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData1,
                getRowData: getRowData1,
                rowHasChanged: (r1, r2) => r1 != r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,

            }),
        };

    },
    render(){
        return (
            <View style={listStyle.outViewStyle}>
                <View>
                    <Text style={{textAlign: 'center', fontSize: 33}}>汽车</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRowView}
                    renderSectionHeader={this.renderSectionHeaderView}
                />
            </View>
        );
    },
    //耗时操作，网络请求，数据加载
    componentDidMount(){
        this.loadDataFromJson();
    }
    ,
    loadDataFromJson(){
        var tempData = carData.data;
        var dataBlob = {}, sectionIDs = [], rowIDs = [], cars = [];
        for (var i = 0; i < tempData.length; i++) {
            sectionIDs.push(i);
            cars = tempData[i].cars;
            dataBlob[i] = tempData[i].title;
            rowIDs[i] = [];
            for (var j = 0; j < cars.length; j++) {
                dataBlob[i + ':' + j] = cars[j];
                rowIDs[i].push(j);
            }
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
            });
        }
    },
    renderRowView(rowData){
        return (
            <TouchableOpacity>
                <View style={listStyle.rowViewStyle}>
                    <Image source={{uri: rowData.icon}} style={listStyle.image_icon}/>
                    <Text style={listStyle.text_title}>{rowData.name}</Text>
                </View>
            </TouchableOpacity>

        );
    },
    renderSectionHeaderView(sectionData, sectionIDs){
        return (
            <View style={listStyle.headerViewStyle}>
                <Text>{sectionData}</Text>
            </View>
        );
    }

});

const listStyle = StyleSheet.create({
        outViewStyle: {
            flexDirection: 'column',
            flex: 1,
        },
        rowViewStyle: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: "grey",
            padding: 5,
        },
        headerViewStyle: {
            paddingLeft: 10,
            height: 20,
            backgroundColor: "red",
        },
        text_title: {
            marginLeft: 10,

        },
        image_icon: {
            width: 30,
            height: 30,

        },

    }
);

AppRegistry.registerComponent('B', () => ListViewTop);
