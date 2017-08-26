
import React, { Component,PropTypes } from 'react';
import {
    View,
    requireNativeComponent,
} from 'react-native';

const RCTCircle = requireNativeComponent('MCircle', {
    propTypes: {
        color: PropTypes.number,
        radius: PropTypes.number,
        ...View.propTypes // 包含默认的View的属性
    },
});
module.exports=RCTCircle;