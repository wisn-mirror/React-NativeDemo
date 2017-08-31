import React, {Component, PropTypes} from 'react';
import {
    View,
    requireNativeComponent,
} from 'react-native';

var MyView = requireNativeComponent('MyView', {
    name: "TextViewText",
    propTypes: {
        color: PropTypes.number,
        textsize: PropTypes.number,
        text: PropTypes.string,
        onChangeMessage: React.PropTypes.func,
        ...View.propTypes
    }
}, {
    nativeOnly: {onChange: true}
});

export default class TextViewText extends Component {
    render() {
        return (
            <MyView
                {...this.props}
                onChange={(event) => {
                    this.props.onChangeMessage(event);
                }}
            />
        );
    }
}

