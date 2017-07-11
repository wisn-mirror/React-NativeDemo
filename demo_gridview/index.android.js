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
var shareData=require('./shareData.json');//数组
var cols=3;
var imageWidth=120;
var mwidth=(swidth-imageWidth*cols)/(cols+1);
const ListViewDemoNineLable = React.createClass({
        getDefaultProps(){
            return {

            }
        },
        getInitialState(){
            var ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
            return{
                dataSource:ds.cloneWithRows(shareData.data),
            }
        },
        render(){
            return (
                <ListView
                dataSource={this.state.dataSource}
                //item 显示的效果
                renderRow={this.renderRow}
                contentContainerStyle={listStyle.listViewStyle}
                />
            );
        },
        renderRow(rowData,sectionID,rowID,hightlightRow){
            return (
                <TouchableOpacity activeOpacity={0.5} onPress={()=>this.PressEvent(rowData)}>
                <View style={listStyle.itemViewStyle}>
                    <Image source={{uri:rowData.a}} style={listStyle.imagetitle}/>
                    <Text>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
            );
        },
    PressEvent(rowData){
        Alert.alert(rowData.title)
    }
});

const  listStyle=StyleSheet.create(
    {
       listViewStyle:{
           flexDirection:'row',
           justifyContent:'flex-start',
           flexWrap:'wrap',
       },
        itemViewStyle:{
            marginLeft:mwidth,
            width:imageWidth,
            height:(imageWidth+10),
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
        },
        imagetitle:{
            height:60,
            width:60,
        }

    }
);

AppRegistry.registerComponent('B', () => ListViewDemoNineLable);
