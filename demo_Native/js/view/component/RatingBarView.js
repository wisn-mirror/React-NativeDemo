import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class RatingBarView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: (this.props.current) ? this.props.current : 0,
        };
    }

    static propTypes = {
        style: View.propTypes.style,
        RatingBarStyle: View.propTypes.style,
        title: PropTypes.string,
        RatingChangeLister: PropTypes.func,
        current: PropTypes.number,
    }

    render() {
        return (
            <View style={[ratingStyle.outViewStyle, this.props.style]}>
                <Text style={ratingStyle.titleStyle}>{this.props.title}</Text>
                <View style={[ratingStyle.RatingBarStyle, this.props.RatingBarStyle]}>
                    {this.getRatingView()}
                </View>
            </View>
        );
    }

    _onChangeItem(key) {
        this.setState({
            current: key,
        })
        this.props.RatingChangeLister(key);
    }

    getRatingView() {
        var views = [];
        if (!this.state.current && this.state.current === 0) {
            for (var i = 0; i < 5; i++) {
                views.push(this.getImage(i, require("../loginimg/qf_nor_wantwanthead.png")))
            }
        } else {
            for (var i = 0; i < 5; i++) {
                if (i < this.state.current) {
                    views.push(
                        this.getImage(i, require("../loginimg/qf_sel_wantwanthead.png"))
                    )
                } else {
                    views.push(this.getImage(i, require("../loginimg/qf_nor_wantwanthead.png")))
                }
            }
        }
        return views;
    }

    getImage(key, image) {
        return (<TouchableOpacity onPress={() => this._onChangeItem(key+1)}>
            <Image key={key} style={ratingStyle.imageStyle}
                   source={image}/>
        </TouchableOpacity>);
    }
}

const ratingStyle = StyleSheet.create({
    imageStyle: {
        width: 35,
        height: 35,
        margin: 8,
    },
    outViewStyle: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 10,
    },
    titleStyle: {
        marginLeft: 8,
        color: '#5BD672',
        fontSize: 18,
    },
    RatingBarStyle: {
        marginTop: 1,
        flexDirection: "row",
        // backgroundColor: '#d8ffae'
    }

});

