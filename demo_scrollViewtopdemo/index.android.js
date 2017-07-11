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
    ScrollView,
    Image,

} from 'react-native';

//引入
var Dimensions = require('Dimensions');
var swidth = Dimensions.get('window').width;
var TimerMixin = require('react-timer-mixin');
var ImageDataAll = require('./ImageData.json');
const FScrollViewDemo = React.createClass({
    //注册计时器
    mixins: [TimerMixin],
    getDefaultProps(){
        //每1秒钟滚动一次
        return ({
            timeScroll: 1000,
        });
    },

    getInitialState(){
        //初始值
        return {
            //当前页码
            currentPage: 0,
            currentTitle:'标题',
        }
    },

    render(){
        return (
            <View style={style4.outViewStyle}>
                {/*<Text>432423142314</Text>*/}
                <ScrollView
                    ref='scrollView'
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    //当一帧滚动结束
                    onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
                    //开始拖拽
                    onScrollBeginDrag={this.onScrollBeginDrag}
                    onScrollEndDrag={this.onScrollEndDrag}
                >
                    {this.initViewByData()}
                </ScrollView>
                {/*添加指示器*/}
                <View style={style4.pageViewStyle}>
                    {this.renderPageCricle()}
                    {this.renderTitle()}
                </View>
            </View>
        );
    },

    //实现复杂的操作
    componentDidMount(){
        //开启定时器
        this.startTimer();
    },

    //返回轮播图
    initViewByData(){
        var dataView = [];
        var ImageData = ImageDataAll.data;
        for (var i = 0; i < ImageData.length; i++) {
            dataView.push(
                <Image key={i}
                       source={{uri: ImageData[i].img}}
                       style={{width: swidth, height: 200, backgroundColor: '#ff1'}}
                />
            );
        }
        return dataView;
    },

    //返回圆点
    renderPageCricle(){
        var indicatorArr = [];
        var ImageData = ImageDataAll.data;
        var style;
        for (var i = 0; i < ImageData.length; i++) {
            style = (i == this.state.currentPage) ? {color: '#000'} : {color: "#fff"};
            indicatorArr.push(
                <Text key={i} style={[{fontSize: 25, marginLeft: 4}, style]}>&bull;</Text>
            );
        }
        return indicatorArr;
    },

    renderTitle () {
        var titleData = ImageDataAll.data[this.state.currentPage].title;
        var TitleView= <Text key={20} style={{flex:1,color:'white',marginLeft:25 ,textAlign:'right',paddingRight:15}}>{titleData}</Text>
        return TitleView;
    },

    //当一帧滚动结束
    onAnimationEnd(e){
        //水平方向的偏移量
        var offSetX = e.nativeEvent.contentOffset.x;
        //求出当前处于第几页
        var currentPageIndex = Math.floor(offSetX / swidth);
        var title=ImageDataAll.data[currentPageIndex];
        //更新状态机器
        this.setState({
                currentPage: currentPageIndex,
                currentTitle:title,
            }
        );
    },

    onScrollBeginDrag(){
        //停止定时器
        this.clearInterval(this.timer);
    },

    onScrollEndDrag(){
        //开启定时器
        this.startTimer();

    },

    startTimer(){
        //拿到ScrollView
        var scrollView = this.refs.scrollView;
        var imageCount = ImageDataAll.data.length;
        //添加定时器
        this.timer=this.setInterval(function () {
            var tempIndex = this.state.currentPage + 1;
            //设置原点
            if (tempIndex >= imageCount) {
                tempIndex = 0;
            }
            var title=ImageDataAll.data[tempIndex];
            //更新状态集
            this.setState({
                currentPage: tempIndex,
                currentTitle:title,
            });
            //让Scroll 根据偏移量滚动起来
            var offsetX = tempIndex * swidth;
            scrollView.scrollResponderScrollTo({x: offsetX, y: 0, animated: true});

        }, this.props.timeScroll);
    }
});
const style4 = StyleSheet.create({
    outViewStyle: {
        // flex: 1,
        flexDirection: 'column',
        //
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'red',
    },
    pageViewStyle: {
        width: swidth,
        height: 25,
        backgroundColor: 'rgba(100,100,100,0.5)',
        //定位
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
    }
});

AppRegistry.registerComponent('B', () => FScrollViewDemo);
