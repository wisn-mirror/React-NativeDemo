import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class PercentageView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static propTypes = {
        style: View.propTypes.style,
        PercentStyle: View.propTypes.style,
        Percent: PropTypes.number,
    }

    render() {
        return (
            <View style={[{flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},this.props.style]} >
                <View  style={[{width:(this.props.Percent*(this.props.style.width-40)),height:this.props.style.height,marginTop:2},this.props.PercentStyle]}/>
                <Text style={{marginLeft:8,fontSize:20}}>{parseInt(this.props.Percent*this.props.style.width)}</Text>
            </View>
        );
    }
}

