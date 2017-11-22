/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    NativeModules,
    Image,
    ListView,
    Alert,
    StyleSheet
} from 'react-native';
import BaseComponent from "../BaseComponent"
const SkinModule = NativeModules.SkinModule;
var NavigatorComponent1 = require('./NavigatorComponent1');
var WineData=require('../data/Wine.json');//数组

export default class NavigatorComponent2 extends BaseComponent {
    constructor(props) {
        super(props);
        var ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        this.state = {
            gift_0:props.gift_0,
            home_0:props.home_0,
            watch_0:props.watch_0,
            primary:props.primary,
            colorPrimary:props.colorPrimary,
            dataSource:ds,
            WineData:WineData,
        };
    }

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor:this.state.primary,

            }}>
                <TouchableOpacity onPress={() => this._onPress()}>
                    <Text style={{color: this.state.colorPrimary, fontSize: 30}}>ChildComponent1 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setDefault()}>
                    <Text style={{color: this.state.colorPrimary, fontSize: 30}}>setDefault</Text>
                </TouchableOpacity>
                <View  style={{flexDirection:'row'}}>
                    <Image source={{uri: this.state.gift_0}} style={{width: 30, height: 30}}/>
                    <Image source={{uri: this.state.home_0}} style={{width: 30, height: 30}}/>
                    <Image source={{uri: this.state.watch_0}} style={{width: 30, height: 30}}/>
                </View>
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(this.state.WineData)}
                    renderRow={(rowData,sectionID,rowID,hightlightRow)=>{
                        return this.renderRow(rowData,sectionID,rowID,hightlightRow)}}
                    /*renderRow={(rowData)=>this.renderRow(rowData)}*/
                />
            </View>
        );
    }

    renderRow(rowData,sectionID,rowID,hightlightRow){
        var index=rowID%3;
        var view=null;
        if(index===0){
            view= <Image style={listStyle.imageStyle}  source={{uri:this.state.gift_0}}/>;
        }else if(index===1){
            view= <Image style={listStyle.imageStyle}  source={{uri:this.state.home_0}}/>;
        }else if(index===2){
            view= <Image style={listStyle.imageStyle}  source={{uri:this.state.watch_0}}/>;
        }
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={()=>this.pressEvent(rowData)}>
                <View style={listStyle.rowViewStyle}>
                    {view}
                    <View style={listStyle.rowViewStyle2}>
                        <Text style={{marginRight:10,paddingRight:50}}>{rowData.name}</Text>
                        <Text style={{color:'red',marginTop:5}}>$:{rowData.money}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    pressEvent(rowData){
        Alert.alert(rowData.money+rowData.name);
    }
    _onPress() {
       this.props.navigator.pop();
    }
    setDefault(){
        SkinModule.setDefaultSkin();
    }
    /** 重写componentWillMount 方法一定要加 super.componentWillMount() 方法添加监听器*/
    componentWillMount() {
        this.updateSkin("");
        super.componentWillMount();
    }

    /**重写 updateSkin 在换肤的时候重新获取皮肤资源*/
    updateSkin(params) {
        var colorList = new Array();
        colorList.push("primary");
        colorList.push("colorPrimary");
        var imageList = new Array();
        imageList.push("home_0");
        imageList.push("watch_0");
        imageList.push("gift_0");
        SkinModule.getColorImageList(colorList, imageList, (result) => this.setState(result))
    }
}

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

module.exports = NavigatorComponent2;
