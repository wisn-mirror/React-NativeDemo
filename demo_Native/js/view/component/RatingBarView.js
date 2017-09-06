import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import Dimensions from 'Dimensions';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export default class RatingBarView extends Component {
    constructor(props) {
        super(props);
        this._onChangeItem = this._onChangeItem.bind(this);
        this.state = {
            current: (this.props.current) ? this.props.current : 0,
        };
    }

    static propTypes = {
        style: View.propTypes.style,
        RatingBarStyle: View.propTypes.style,
        title: PropTypes.string,
        RatingChangeLister: PropTypes.func,
        onChange: PropTypes.func,
        current: PropTypes.number,
        isEdit: PropTypes.boolean,
        index: PropTypes.number,
    }

    render() {
        let content = this.props.isEdit ?
            <TextInput style={ratingStyle.textInput} placeholder='搜索品项' underlineColorAndroid='transparent'
                       selectTextOnFocus={true} onChangeText={this.props.onChange}/> :
            <View style={[ratingStyle.RatingBarStyle, this.props.RatingBarStyle]}>
                {this.getRatingView()}
            </View>;
        return (
            <View style={[ratingStyle.outViewStyle, this.props.style]}>
                <Text style={ratingStyle.titleStyle}>{this.props.title}</Text>
                {content}
            </View>
        );
    }

    _onChangeItem(key) {
        if (this.props.RatingChangeLister !== null) {
            this.props.RatingChangeLister(key);
        }
        this.setState({
            current: key,
        })
    }

    getRatingView() {
        var views = [];
        if (!this.state.current && this.state.current === 0) {
            for (var i = 0; i < 5; i++) {
                views.push(this.getImage(i, require("../loginimg/qf_nor_wantwanthead.png")))
                // views.push(this.getImage(i, 'qf_nor_wantwanthead'))
            }
        } else {
            for (var i = 0; i < 5; i++) {
                if (i < this.state.current) {
                    views.push(this.getImage(i, require("../loginimg/qf_sel_wantwanthead.png")))
                    // views.push(this.getImage(i, 'qf_sel_wantwanthead'))
                } else {
                    views.push(this.getImage(i, require("../loginimg/qf_nor_wantwanthead.png")))
                    // views.push(this.getImage(i, 'qf_nor_wantwanthead'))
                }
            }
        }
        return views;
    }

    getImage(key, image) {
        return (<TouchableOpacity key={key} onPress={() => this._onChangeItem(key + 1)}>
            <Image style={ratingStyle.imageStyle}
                // source={{uri:image}}/>
                   source={image}/>
        </TouchableOpacity>);
    }
}

const ratingStyle = StyleSheet.create({
    imageStyle: {
        width: 32,
        height: 32,
        margin: 11,
    },
    outViewStyle: {

        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 10,
    },
    titleStyle: {
        marginLeft: 10,
        color: '#127e27',
        fontSize: 16,
    },
    RatingBarStyle: {
        marginTop: 1,
        flexDirection: "row",
        // backgroundColor: '#d8ffae'
    },
    textInput: {
        width: SCREEN_WIDTH - 30,
        textAlignVertical: 'center',
        marginLeft: 0,
        marginRight: 10
    }

});



