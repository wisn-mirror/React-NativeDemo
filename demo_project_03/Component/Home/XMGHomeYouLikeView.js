/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
    ListView,
} from 'react-native';

var Dimensions = require('Dimensions');
var Swidth = Dimensions.get('window').width;
var youLikeData = require('../../LocalData/HomeGeustYouLike.json');
var XMGHomeBottomTitleItem = require('./XMGHomeBottomTitleItem');
var XMGHomeYouLikeView = React.createClass({
    getInitialState(){
        return {
            dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
        }
    },
    render() {
        return (
            <View style={ XMGHomeYouLikeViewStyle.containerOut}>
                <XMGHomeBottomTitleItem
                    leftIcon='cnxh'
                    title='猜Evey喜欢'
                    message=''
                    callBackFunc={this.callBackFuncAlert}
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRowItem}
                    style={XMGHomeYouLikeViewStyle.listViewStyle}
                />
            </View>
        );
    },
    callBackFuncAlert(title){
        Alert.alert(title, title);
    },

    renderRowItem(rowData){
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={this.onPressClick}>
                <View style={XMGHomeYouLikeViewStyle.youlikeViewItemStyle}>
                    <Image source={{uri:this.getUrl(rowData.imageUrl)}} style={XMGHomeYouLikeViewStyle.imageStyle}/>
                    {/*<Image source={{uri:"cnxh"}} style={XMGHomeYouLikeViewStyle.imageStyle}/>*/}
                    <View style={{flexDirection:'column', justifyContent:'center',
                        width:(Swidth-150),marginRight:10,marginLeft:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontSize:16}}>{rowData.title}</Text>
                        <Text style={{fontSize:12,color:'gray'}}>{rowData.topRightInfo}</Text>
                    </View>
                    <Text style={{fontSize:12,color:'gray',marginTop:8}}>{this.getSubtitle(rowData.subTitle)}</Text>
                    <View style={{flexDirection:'row' ,justifyContent:'space-between',marginTop:10}}>
                        <Text style={{fontSize:14,color:'red'}}>{rowData.mainMessage}+{rowData.mainMessage2}</Text>
                        <Text style={{fontSize:12 }}>{rowData.bottomRightInfo}</Text>
                    </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },
    componentDidMount(){
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(youLikeData.data),
        });
    },
    getUrl(imageUrl){
        var url='';
        if (imageUrl.search('w.h') == -1) {
            url= imageUrl;
        } else {
            url= imageUrl.replace('w.h', '120.90');
        }
        console.log(url)
        return url;
    },
    getSubtitle(subtitle ){
        if(subtitle.length>25){
            return subtitle.substring(0,25);
        }else{
            return subtitle;
        }
    },
    onPressClick(){

    },

});

const XMGHomeYouLikeViewStyle = StyleSheet.create({
    containerOut: {
        marginTop: 10,
    },
    youlikeViewItemStyle: {
        flexDirection: 'row',
        width:Swidth,
        paddingTop:5,
        paddingBottom:5,
        borderBottomWidth:0.3,
        borderBottomColor:'#636363',
        backgroundColor:'white',
        paddingBottom:10,
        paddingTop:10,
    },
    imageStyle: {
        marginLeft:15,
        width: 120,
        height: 80,
        borderRadius:3,

    },
    listViewStyle: {
        width: Swidth,
    }

});
module.exports = XMGHomeYouLikeView;