/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    requireNativeComponent,
    processColor,
    Alert,
    DeviceEventEmitter,
    Image,
    ToastAndroid,
} from 'react-native';
import {RnModule} from "../../index.android";

import Dimensions from 'Dimensions';
import RCTCircle from "./Circle";
import MyTextView from "./component/MyTextView";
import PercentageView from "./component/PercentageView";
import DashLine from "./component/DashLine";
import ScrollViewTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class demo_Native extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this._onChange = this._onChange.bind(this);
    }

    _onChange(event) {
        Alert.alert("" + event.nativeEvent.message);
        // if (!this.props.onChangeMessage) {
        //     return;
        // }
        // this.props.onChangeMessage(event.nativeEvent.message);
    }

    componentDidMount() {
        this.listener = DeviceEventEmitter.addListener("topChange", (e) => {
            Alert.alert("eee" + event.nativeEvent.message);
        })
    }

    componentWillUnmount() {
        this.listener.remove();
    }

    _onPressShowToast() {
        RnModule.showToast();
    }

    _onPressStartNative() {
        RnModule.startNativeTest();
    }

    getItemView(title, lab1, lab2, unitStr, Percent, labColor, bgImage) {
        return (
            <Image resizeMode='stretch' style={{marginLeft: 10, marginRight: 10, width: SCREEN_WIDTH - 20, height: 140}}
                   source={bgImage}>
                <View style={{flexDirection: "column", padding: 10, justifyContent: 'center'}}>
                    <Text style={[styles.fontStyle]}>{title}</Text>
                    <Text style={[styles.fontStyle, {
                        color: "#aeaeae",
                        textAlign: 'center',
                        fontSize: 14,
                        marginTop: 5
                    }]}>(单位：{unitStr})</Text>
                    <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 2}}>
                        <View style={{flexDirection: "column", justifyContent: 'center'}}>
                            <Text style={[styles.fontStyle, {
                                textAlign: 'right',
                                height: 35,
                                paddingTop: 6
                            }]}>{lab1}</Text>
                            <Text style={[styles.fontStyle, {height: 35, paddingTop: 6}]}>{lab2}</Text>
                        </View>
                        <View style={{width: 0.5, height: 80, backgroundColor: '#251924', marginLeft: 4}}/>
                        <View style={{flexDirection: "column"}}>
                            <PercentageView
                                style={{width: 200, height: 32, backgroundColor: "#fefefe"}}
                                PercentStyle={{backgroundColor: labColor}}
                                Percent={Percent}
                            />
                            <PercentageView
                                style={{width: 200, height: 32, backgroundColor: "#fefefe"}}
                                PercentStyle={{backgroundColor: labColor}}
                                Percent={Percent}
                            />
                        </View>
                    </View>
                </View>
            </Image>);
    }

    render() {
        return (
            <View style={styles.container}>
                {/*{this.getItemView("终端摆放次数达成率", "应拜访终端数", "实际拜访终端数"*/}
                    {/*, "次数", 0.1, "#fae62e", require('./component/ji_background_top.png'))}*/}
                {/*<DashLine*/}
                    {/*style={{width: SCREEN_WIDTH - 45, backgroundColor: 'white', marginLeft: 20, marginRight: 20}}/>*/}
                {/*{this.getItemView("终端摆放次数达成率", "应拜访终端数", "实际拜访终端数"*/}
                    {/*, "次数", 0.2, "#fae62e", require('./component/ji_background_between.png'))}*/}
                {/*<DashLine*/}
                    {/*style={{width: SCREEN_WIDTH - 45, backgroundColor: 'white', marginLeft: 20, marginRight: 20}}/>*/}
                {/*{this.getItemView("终端摆放次数达成率", "应拜访终端数", "实际拜访终端数"*/}
                    {/*, "次数", 0.6, "#fae62e", require(''))}*/}
                <ScrollViewTabView
                    tabBarBackgroundColor='white'
                    tabBarActiveTextColor='#002D00'
                    tabBarInactiveTextColor="#002D00"
                    tabBarUnderlineStyle={{backgroundColor: '#5BD672'}}
                    renderTabBar={() => <ScrollableTabBar/>}
                >
                    <OperationalTab tabLabel={"本月作业指标达成"}
                                    isLast={false}
                    />
                    <OperationalTab tabLabel={"上月作业指标达成"}
                                    isLast={true}
                    />
                </ScrollViewTabView>
                {/*<MyTextView*/}
                {/*{...this.props}*/}
                {/*style={{width: 100, height: 100}}*/}
                {/*color={processColor('#fc83ff')}*/}
                {/*textsize={20}*/}
                {/*text='你好，TextView'*/}
                {/*onChangeMessage={(event) => this._onChange(event)}*/}
                {/*// onChangeMessage={(event)=>{*/}
                {/*//     ToastAndroid.show(event.nativeEvent.message, ToastAndroid.SHORT);*/}
                {/*// }}*/}
                {/*/>*/}
                {/*<RCTCircle*/}
                {/*style={{width: 100, height: 100}}*/}
                {/*color={processColor('#ff0000')}*/}
                {/*radius={50}*/}
                {/*/>*/}
                {/*<TouchableOpacity onPress={() => this._onPressShowToast()}>
                    <Text style={{marginTop: 30, fontSize: 40}}>show Native toast</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._onPressStartNative()}>
                    <Text style={{marginTop: 30, fontSize: 40}}>start Native test</Text>
                </TouchableOpacity>*/}
            </View>
        );
    }
}

export class OperationalTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toreRate: '',
            lanVisitStore: '',
            urVisitedStore: '',
            toreCountsRate: '',
            lanVisitCount: '',
            urVisitedCount: '',
            potVisitedStore: '',
            isitCountRate: '',
            isitCount: '',
        };
    }

    componentDidMount() {
      /*  if (this.props.isLast) {
            OperationalGuidanceModule.loadOperationTrackLastMonth((result) => this.setState(result));
        } else {
            OperationalGuidanceModule.loadOperationTrackSameMonth((result) => this.setState(result));
        }*/
    }

    _goBack() {
       // OperationalGuidanceModule.goBack();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    getItemView(title, lab1, lab2, unitStr, Percent, labColor, bgImage) {
        return (
            <Image resizeMode='stretch' style={styles.outImageViewStyle}
                   source={bgImage}>
                <View style={{flexDirection: "column", padding: 10, justifyContent: 'center'}}>
                    <Text style={styles.fontStyle}>{title}</Text>
                    <Text style={styles.unitStyle}>(单位：{unitStr})</Text>
                    <View style={styles.labContentViewStyle}>
                        <View style={styles.labTitleViewStyle}>
                            <Text style={styles.labTitleStyle}>{lab1}</Text>
                            <Text style={styles.labTitleStyle}>{lab2}</Text>
                        </View>
                        <View style={styles.lineStyle}/>
                        <View style={{flexDirection: "column"}}>
                            <PercentageView
                                style={{width: 200, height: 32, backgroundColor: "#fefefe"}}
                                PercentStyle={{backgroundColor: labColor}}
                                Percent={Percent}
                            />
                            <PercentageView
                                style={{width: 200, height: 32, backgroundColor: "#fefefe"}}
                                PercentStyle={{backgroundColor: labColor}}
                                Percent={Percent}
                            />
                        </View>
                    </View>
                </View>
            </Image>);
    }

    render() {
        if (this.props.isLast) {
            return this.getLastView();
        } else {
            return this.getSameView();
        }
    }

    getSameView() {
        return (<View style={{marginTop: 10}}>
            {this.getItemView("终端拜访次数达成率", "应拜访终端数", "实际拜访终端数"
                , "次数", 0.1, "#fae62e", require('./component/ji_background_top.png'))}
            <DashLine style={{
                width: SCREEN_WIDTH - 45,
                backgroundColor: 'white',
                marginLeft: 20,
                marginRight: 20
            }}/>
            {this.getItemView("终端拜访次达成率", "应拜访终端次", "实际拜访终端次"
                , "次数", 0.6, "#3681e8",  require('./component/ji_background_between.png'))}
            <DashLine style={{
                width: SCREEN_WIDTH - 45,
                backgroundColor: 'white',
                marginLeft: 20,
                marginRight: 20
            }}/>
            {this.getItemView("现场达成率", "实际拜访终端次", "300米内拜访次"
                , "次数", 0.2, "#ff4f4f",  require('./component/ji_background_bottom.png'))}</View>);
    }

    getLastView() {
        return (<View style={{marginTop: 10}} tabLabel={"上月作业指标达成"}>
            {this.getItemView("终端拜访次数达成率", "应拜访终端数", "实际拜访终端数"
                , "次数", 0.4, "#fae62e", require('./component/ji_background_top.png'))}
            <DashLine style={{
                width: SCREEN_WIDTH - 45,
                backgroundColor: 'white',
                marginLeft: 20,
                marginRight: 20
            }}/>
            {this.getItemView("终端拜访次达成率", "应拜访终端次", "实际拜访终端次"
                , "次数", 0.6, "#3681e8", require('./component/ji_background_between.png'))}
            <DashLine style={{
                width: SCREEN_WIDTH - 45,
                backgroundColor: 'white',
                marginLeft: 20,
                marginRight: 20
            }}/>
            {this.getItemView("现场达成率", "实际拜访终端次", "300米内拜访次"
                , "次数", 0.2, "#ff4f4f", require('./component/ji_background_bottom.png'))}</View>);
    }


    _Percentage(num, total) {
        if (isNaN(num) || isNaN(total)) {
            return 0;
        }
        return (Math.round(num / total * 10000) / 100.00 );// 小数点后两位百分比
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    fontStyle: {
        color: "#251924",
        fontSize: 18,
    },
    unitStyle: {
        color: "#aeaeae",
        textAlign: 'center',
        fontSize: 14,
        marginTop: 5
    },
    labContentViewStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2
    },
    labTitleViewStyle: {
        flexDirection: "column",
        justifyContent: 'center',
    },
    labTitleStyle: {
        textAlign: 'right',
        height: 35,
        paddingTop: 6,
        color: "#251924",
        fontSize: 18,
    },
    lineStyle: {
        width: 0.5,
        height: 80,
        backgroundColor: '#251924',
        marginLeft: 4
    },
    outImageViewStyle: {
        marginLeft: 10,
        marginRight: 10,
        width: SCREEN_WIDTH - 20,
        height: 140
    },
    dashLineStyle: {
        width: SCREEN_WIDTH - 45,
        backgroundColor: 'white',
        marginLeft: 20,
        marginRight: 20
    }
});


