import React from 'react'
import {
    View,
    ART
} from 'react-native'

const {Surface, Shape, Path} = ART;

export default class DashLine extends React.Component{

    render(){
        const path = Path()
            .moveTo(1,1)
            .lineTo(parseInt(this.props.style.width),1);

        return(
            <View style={this.props.style}>
                <Surface width={this.props.style.width} height={1}>
                    <Shape d={path} stroke="#DEDEDE" strokeWidth={2} strokeDash={[10,10]}/>
                </Surface>
            </View>
        )
    }
}