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
var WineData=require('./Wine.json');//数组
const ListViewDemo = React.createClass({

    getInitialState(){
        //设置数据  当r1 r2的不同的时候刷新数据源
        var ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        return ({
            dataSource:ds.cloneWithRows(WineData),
        });
    },
    render(){
      return (
         <ListView
         dataSource={this.state.dataSource}
         renderRow={this.renderRow}
         />
      );
    },
    renderRow(rowData,sectionID,rowID,hightlightRow){
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={()=>this.pressEvent(rowData)}
            >
            <View style={listStyle.rowViewStyle}>
                <Image style={listStyle.imageStyle}  source={{uri:rowData.image}}/>
                <View style={listStyle.rowViewStyle2}>
                    <Text style={{marginRight:10,paddingRight:50}}>{rowData.name}</Text>
                    <Text style={{color:'red',marginTop:5}}>$:{rowData.money}</Text>
                </View>
            </View>
            </TouchableOpacity>
        );
        // return <Text>{rowData}+{sectionID}+{rowID}+{hightlightRow}</Text>
    },

    pressEvent(rowData){
       Alert.alert(rowData.money+rowData.name);
    }
});

const  listStyle=StyleSheet.create(
    {
        rowViewStyle:{
            flexDirection:'row',
            justifyContent:'flex-start',
            marginLeft:5,
            marginRight:5,
            borderBottomWidth:1,
            borderBottomColor:"#f6d579",
        },
        rowViewStyle2:{
            flexDirection:'column',
            justifyContent:'center',
            marginLeft:10,
        },
        imageStyle:{
            height:60,
            width:60,
        }

    }
);

AppRegistry.registerComponent('B', () => ListViewDemo);
