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
    View
} from 'react-native';

export default class B extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{backgroundColor: 'red', height: 30}}>One</Text>
                <Text style={{backgroundColor: 'green', height: 40}}>two</Text>
                <Text style={{backgroundColor: 'blue', height: 50}}>three</Text>
                <Text style={{backgroundColor: 'yellow', height: 60}}>four</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'purple',
        marginTop: 100,
        flexDirection: 'row',
        // flexDirection:"column"
        //主轴的方向对齐方式
        // justifyContent:'flex-start',
        // justifyContent:'flex-end',
        // justifyContent:'center',
        // justifyContent:'space-around',
        justifyContent: 'space-between',

        //侧轴的对齐方式
        // alignItems:'flex-start',
        // alignItems:'flex-end',
        // alignItems:'center',
        // alignItems:'baseline',
        alignItems: 'stretch',//默认拉升

    },


});
class B2 extends Component {
    render() {
        return ( <View style={style2.container}>
            <Text style={{backgroundColor: 'red', width: 100}}>One</Text>
            <Text style={{backgroundColor: 'green', width: 80}}>two</Text>
            <Text style={{backgroundColor: 'blue', width: 100}}>three</Text>
            <Text style={{backgroundColor: 'yellow', width: 120}}>four</Text>
        </View>);

    }
}
const style2 = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'purple',
        marginTop: 100,
        flexDirection: 'row',

        justifyContent: 'flex-start',

        alignItems: 'center',

        //换行 默认不换行  nowrap
        flexWrap: 'wrap',
        //不能使用
        // flexWrap:'wrap-reverse',
    }
});


class B3 extends Component {
    render() {
        return ( <View style={style3.container}>
            <Text style={{backgroundColor: 'red', flex: 1,height:60 ,alignSelf:'flex-start'}}>One</Text>
            <Text style={{backgroundColor: 'green', flex: 3,height:80}}>two</Text>
            <Text style={{backgroundColor: 'blue', flex: 1,height:70 ,alignSelf:'flex-end'}}>three</Text>
            <Text style={{backgroundColor: 'yellow', flex: 1,height:90}}>four</Text>
        </View>);

    }
}

const style3 = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'purple',
        marginTop: 100,
        flexDirection: 'row',

        justifyContent: 'flex-start',

        alignItems: 'center',

        //换行 默认不换行  nowrap
        flexWrap: 'wrap',
        //alignSelf:auto  flex-start flex-end center
    }
});


//引入
var Dimensions=require('Dimensions');

class  B4 extends Component{
    render(){
       return (
           <View style={style4.outViewStyle}>
               <Text>当前屏幕width：{Dimensions.get('window').width}</Text>
               <Text>当前屏幕height：{Dimensions.get('window').height}</Text>
               <Text>当前屏幕分辨率：{Dimensions.get('window').scale}</Text>
           </View>
       );
    }
}
const style4=StyleSheet.create({
    outViewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});

// AppRegistry.registerComponent('B', () => B);
// AppRegistry.registerComponent('B', () => B2);
// AppRegistry.registerComponent('B', () => B3);
AppRegistry.registerComponent('B', () => B4);
