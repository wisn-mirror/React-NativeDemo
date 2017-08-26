import React, { Component,PropTypes } from 'react';
import {
    View,
    requireNativeComponent,
} from 'react-native';

const myTextView = requireNativeComponent('MyView', {
    propTypes: {
        color: PropTypes.number,
        textsize: PropTypes.number,
        text:PropTypes.string,
        ...View.propTypes // 包含默认的View的属性
    },
});
module.exports=myTextView;

