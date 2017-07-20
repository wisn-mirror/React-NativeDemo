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
} from 'react-native';

var Dimensions = require('Dimensions');
var Swidth = Dimensions.get('window').width;
var XMGHomeBottomTitleItem=require('./XMGHomeBottomTitleItem');
var XMGHomeBottomCommentView = React.createClass({

    render() {
        return (
          <View style={ XMGHomeBottomCommentViewStyle.containerOut}>
              <XMGHomeBottomTitleItem
                  leftIcon='gw'
                  title='热门频道'
                  message='全部4家'
                  callBackFunc={this.callBackFuncAlert}
              />
          </View>
        );
    },
    callBackFuncAlert(title){
        Alert.alert(title,title);
    }

});

const XMGHomeBottomCommentViewStyle = StyleSheet.create({
    containerOut: {
        marginTop:10,
    },

});
module.exports = XMGHomeBottomCommentView;