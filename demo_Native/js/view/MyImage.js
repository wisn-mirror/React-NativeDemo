/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component,PropTypes } from 'react';
import {
    Image,
} from 'react-native';
import {RnModule } from "../../index.android";
export default class MyImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uri: null,
        };
    }

    static defaultProps = {
        uri: null,
    };

    static propTypes = {
        uri: PropTypes.string,
        imageStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    }

    async componentWillReceiveProps() {
        let isExists = await RnModule.isImageExists();
        if (this.props.uri !== null) {
            this.setState({
                uri: this.props.uri
            });
        } else if (isExists) {
            this.setState({
                uri: await RnModule.getImageUri()
            });
        } else {
            this.setState({
                uri: 'head_default'
            });
        }
    }

    render() {
        return (
            <Image source={{uri: this.state.uri}} style={this.props.imageStyle}/>
        );
    }
}
