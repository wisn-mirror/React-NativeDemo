/**
 * Created by wisn on 2017/7/14.
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
var localData = require('../localdata.json');
var FScrollView = require('./Home_headView');
var NewsDetial=require('./NewsDetial');
const Home = React.createClass({
    getDefaultProps(){
        return {
            url_pai: 'http://api.dagoogle.cn/news/get-news?tableNum=1&pagesize=10&page=1',
        }
    },
    getInitialState(){
        return {
            headDataArr: [],
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 != r2,
            }),
        };
    },
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderHeader={this.renderHeader}

            />
        );
    },
    renderRow(rowData){
        return (
            <TouchableOpacity activeOpacity={0.5}
                              onPress={()=>this.pushToNewDetial(rowData)} >
                <View style={homeStyles.rowStyle}>
                    <Image style={homeStyles.rowImageStyle} source={{uri: rowData.text_image0}}/>
                    <View style={homeStyles.rowRightStyle}>
                        <Text style={homeStyles.titleStyle}>{rowData.title}</Text>
                        <Text style={homeStyles.contentStyle}>{rowData.digest}</Text>
                        <Text style={homeStyles.bottomContentStyle}>{rowData.reply_count}跟帖</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    },
    pushToNewDetial(rowData){
        //http://api.dagoogle.cn/news/single-news?callback=?&tableNum=1&news_id=5628
        //跳转
        this.props.navigator.push({
            component:NewsDetial,
            passProps:{rowData},
            title: rowData.title,
        });
    },
    //请求数据
    componentDidMount(){
        fetch(this.props.url_pai)
            .then((response) => response.json())
            .then((responseJson) => {
                this.dealWithData(responseJson);
            }).catch((error) => {
            if (error) {
                //没有网络的时候，加载离线数据
                this.dealWithData(localData);
            }
        })
    },
    renderHeader(){
        if (this.state.headDataArr.length == 0) {
            return;
        }
        return (<FScrollView
            ImageDataAll={this.state.headDataArr}
        />);
    },
    dealWithData(responseJson){
        var jsonData = responseJson.data;
        var headArray = [], listDataArray = [];
        for (var i = 0; i < jsonData.length; i++) {
            var dataOne = jsonData[i];
            if (dataOne.title.length > 17) {
                dataOne.title = dataOne.title.substring(0, 17) + "...";
            }
            if (dataOne.digest.length > 42) {
                dataOne.digest = dataOne.digest.substring(0, 42) + "...";
            }
            headArray.push(dataOne);
            listDataArray.push(dataOne);
        }

        this.setState({
            headDataArr: headArray,
            dataSource: this.state.dataSource.cloneWithRows(listDataArray),
        });
    }

});


const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
    },
    rowStyle: {
        flexDirection: 'row',
        // justifyContent:'center',
        // alignItems:'center',
        padding: 10,
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.3,
        // marginRight:10,
    },
    rowImageStyle: {
        height: 80,
        width: 80,
    },
    rowRightStyle: {
        marginLeft: 8,
        flexDirection: 'column',
        marginRight: 10,
    },
    titleStyle: {
        color: '#000',
        fontSize: 16,
    },
    contentStyle: {
        marginTop: 3,
        color: '#484848',
        fontSize: 12,

    },
    bottomContentStyle: {
        position: 'absolute',
        left: 0,
        bottom: 0,
    },
});
module.exports = Home;