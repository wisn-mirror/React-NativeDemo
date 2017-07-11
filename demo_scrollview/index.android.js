/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    ScrollView,
} from 'react-native';



// npm i react-timer-mixin --save 更新定时器的类库
//注册定时器的类库
var TimerMixin=require('react-timer-mixin');

class C extends Component{
    render(){
        return (
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            scrollEnabled={false}
            >
                {this.renderChildView()}
            </ScrollView>
        );
    }
    renderChildView(){
        var allChild=[];
        var color=['red','green','yellow','purple','blue'];
        for(var i=0;i<color.length;i++){
            allChild.push(
              <View key={i} style={{backgroundColor:color[i], width:400,height:300}}>
                  <Text>{i}</Text>
              </View>
            );
        }
        return allChild;
    }
}



AppRegistry.registerComponent('C', () => C);
