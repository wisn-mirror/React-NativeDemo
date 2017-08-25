import React, { Component,PropTypes } from 'react';
import {
    requireNativeComponent,
    processColor,
    View,
} from 'react-native';
const myTextView=requireNativeComponent("MyTextViewManager",
    {
        propTypes:{
            color:PropTypes.number,
            text:PropTypes.string,
            ...View.propTypes,
        }
    }
)
export  default  class MyTextView extends Component {

    static propTypes = {
        color:PropTypes.string,
        text:PropTypes.string,
        ...View.propTypes // 包含默认的View的属性
    }

    render() {
        const { style, text, color } = this.props;
        console.log(" MyTextView "+text+"  "+color);
        return (
            <myTextView
                style={style}
                text={text}
                color={processColor(color)}
            />
        );
    }

}

