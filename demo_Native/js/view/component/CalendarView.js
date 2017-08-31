import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import Dimensions from 'Dimensions';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
const week = ['日', '一', '二', '三', '四', '五', '六']
export default class CalendarView extends Component {
    constructor(props) {
        super(props);
        this.year = this.props.year;
        this.month = this.props.month;
        this.state = {
            isShow: true,
            isShowStr: '收起',
            select: this.mGetTodyDate(),
        };
    }

    static propTypes = {
        style: View.propTypes.style,
        PercentStyle: View.propTypes.style,
    }

    _PressIsShow() {
        this.setState({
            isShow: !this.state.isShow,
            isShowStr: this.state.isShow ? '收起' : '展开',
        });
    }

    render() {
        return (
            <View
                style={[styles.container, this.props.style]}>
                <View style={styles.outLineViewStyle}>
                    {this.getTitleView()}
                </View>
                {this.getDataListView()}
                <TouchableOpacity onPress={() => this._PressIsShow()}>
                    <Text style={styles.bottomStyle}>{this.state.isShowStr}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    getDataListView() {
        var sum = this.mGetDate();
        var weekStart = this.mGetDataWeek();
        var today = this.mGetTodyDate();
        var numWeek = (sum + weekStart) / 7;//4
        // console.log("tag  weekStart" + weekStart + " sum" + sum + " numWeek" + numWeek + " select " + this.state.select);
        var OutViews = [];
        var index = 0;
        var data = 1;
        var column = (this.state.isShow) ? numWeek : 1;
        for (var i = 0; i < column; i++) {
            var views = [];
            for (var j = 0; j < 7; j++) {
                index++;
                if (index <= weekStart) {
                    views.push(<Text key={index}
                                     style={styles.nullStyle}> </Text>)
                } else {
                    if ((sum + weekStart) >= index) {
                        var selectStyle = {};
                        if (data === this.state.select) {
                            selectStyle = {backgroundColor: "red"};
                        } else {
                            selectStyle = null;
                        }
                        if (index === (today + weekStart)) {
                            //今天
                            views.push(
                                <TouchableOpacity key={index} onPress={this._pressDay.bind(this, data)}>
                                    <Text style={[styles.monthDayStyle, {backgroundColor: "#4fff5b"}, selectStyle]}
                                    >{data}</Text>
                                </TouchableOpacity>)
                        } else {
                            //除了今天的其他的所有天
                            views.push(
                                <TouchableOpacity key={index}  onPress={this._pressDay.bind(this, data)}>
                                    <Text style={[styles.monthDayStyle, selectStyle]}>{data}</Text>
                                </TouchableOpacity>)

                        }
                    } else {
                        //空白留空
                        views.push(<Text key={index}
                                         style={styles.nullStyle}> </Text>)
                    }
                    data++;
                }
            }
            OutViews.push(<View key={i} style={styles.outLineViewStyle}>
                {views}
            </View>)
        }
        return OutViews;
    }

    _pressDay(data) {
        this.setState({
            select: data,
        })
    }

    getTitleView() {
        var views = [];
        for (var i = 0; i < week.length; i++) {
            views.push(<Text key={i}
                             style={styles.titleStyle}>{week[i]}</Text>)
        }
        return views;
    }

    /**
     *  当月多少天
     * @returns {number}
     */
    mGetDate() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var d = new Date(year, month, 0);
        return d.getDate();
    }

    /**
     * 获取当前日
     * @returns {number}
     */
    mGetTodyDate() {
        var d = new Date();
        return d.getDate();
    }


    /**
     * 当月第一天星期几
     * @returns {number}
     */
    mGetDataWeek() {
        var date = new Date();
        date.setDate(1);
        return date.getDay();
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    monthDayStyle: {
        width: 24,
        height: 24,
        textAlign: 'center',
        fontSize: 12,
        paddingTop: 3,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "red",
    },
    nullStyle: {
        width: 24,
        height: 24,
        textAlign: 'center',
        fontSize: 12,
    },
    outLineViewStyle: {
        width: SCREEN_WIDTH,
        height: 40,
        marginTop: 2,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    bottomStyle: {
        height: 40,
        textAlign: 'center',
        width: SCREEN_WIDTH,
        color: '#4fff5b'

    },
    titleStyle: {
        width: 30,
        textAlign: 'center',
        height: 30,
        fontSize: 16
    }
});

