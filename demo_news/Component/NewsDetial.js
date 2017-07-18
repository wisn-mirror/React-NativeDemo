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
    WebView,
    Alert,
} from 'react-native';
const NewsDetial = React.createClass({

    getInitialState(){
        return {
            content:'',
        }
    },
    render() {
        return (
            <WebView
                ref='webview'
                automaticallyAdjustContentInsets={false}
                // source={{html: this.state.content,baseUrl:''}}
                source={{url: 'https://www.baidu.com',baseUrl:''}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                decelerationRate="normal"
            />)
    },
    componentDidMount(){
        // var url='http://api.dagoogle.cn/news/single-news?tableNum=0&news_id=5627';
        var url='https://www.baidu.com';
        fetch(url)
            // .then((responses)=>responses.json())
            .then((response) =>  {
                // Alert.alert(response.content);
                // var html='<Html><head></head><body>'+response.data.content+'</body></Html>';
                var html=response;
                this.setState({
                    content:html,
                })
            }).catch((error) => {
            Alert.alert('error');
        })
    }

});

module.exports = NewsDetial;
