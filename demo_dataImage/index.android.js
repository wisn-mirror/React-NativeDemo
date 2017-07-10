/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


//导入json数据
var Alldata = require('./shareData2.json');
var Dimensions=require('Dimensions');
var width=Dimensions.get('window').width;

var cols=3;
var boxW=110;
var vMargin=(width- cols*boxW)/(cols+1);
var hMargin=10;
export default class C extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderAllData()}
            </View>
        );
    }

    //返回数据
    renderAllData() {
        //定义数据装所有子组件
      var allPackage = [];
      for(var i=0;i<Alldata.data.length;i++){
        //取出单独的数据对象
          var oneData=Alldata.data[i];
          allPackage.push(
              <View key={i} style={styles.outViewStyle}>
                <Image source={{uri: oneData.icon}} style={styles.titleImageStyle}/>
                {/*<Image source={require(""+{oneData.icon})} style={styles.titleImageStyle}/>*/}
                <Text style={styles.titleTextStyle}>
                    {oneData.title}
                </Text>
              </View>

          );
      }
      return allPackage;

    }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
      flexWrap:'wrap',
      flexDirection:'row',
      // justifyContent:'space-around',
      alignItems:'center',
      // justifyContent:'flex-end',
    backgroundColor: '#F5FCFF',
  },
    outViewStyle:{
        marginLeft:vMargin,
        marginTop:hMargin,
        width:boxW,
        height:boxW,
        alignItems:'center',
        backgroundColor:'#fff',

    },
    titleImageStyle:{
      width:76,
        height:76,
    },
    titleTextStyle:{

    }

});

AppRegistry.registerComponent('C', () => C);
