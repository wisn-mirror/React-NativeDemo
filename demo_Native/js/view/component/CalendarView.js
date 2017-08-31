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
const week = ['日', '一', '二', '三', '四', '五', '六'];
export default class CalendarView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: this.props.year ? this.props.year : null,
            month: this.props.month ? this.props.month : null,
            isShow: true,
            isShowStr: '收起',
            select: -1,
        };
    }

    static propTypes = {
        style: View.propTypes.style,
        PercentStyle: View.propTypes.style,
        //指定年 不传值默认本年
        year: PropTypes.number,
        //指定月 不传值默认本月
        month: PropTypes.number,
        //监听选择事件
        selectOnListener:PropTypes.func,
    }

    componentDidMount() {
        this.setState({
            select: this.mGetTodyDate(),
        });
    }

    componentWillReceiveProps(nextProps) {
        //动态更新
        if (this.state.year !== nextProps.year || this.state.month !== nextProps.month) {
            this.setState({
                year: nextProps.year,
                month: nextProps.month,
            })
        }
    }

    _PressIsShow() {
        this.setState({
            isShow: !this.state.isShow,
            isShowStr: this.state.isShow ? '展开' : '收起',
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
                                <TouchableOpacity key={index} onPress={this._pressDay.bind(this, data)}>
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
        if(this.props.selectOnListener){
            this.props.selectOnListener(data);
        }
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
        if (this.state.year !== null && this.state.month !== null) {
            var d = new Date(this.state.year, this.state.month, 0);
            return d.getDate();
        } else {
            var d = new Date();
            var year = d.getFullYear();
            var month = d.getMonth() + 1;
            var d = new Date(year, month, 0);
            return d.getDate();
        }
    }

    /**
     * 获取当前日
     * @returns {number}
     */
    mGetTodyDate() {
        var d = new Date();
        if (this.state.year === null||this.state.month === null  || (d.getFullYear() === this.state.year && (d.getMonth() + 1) === this.state.month)) {
            return d.getDate();
        }else {
            return -1;
        }
    }


    /**
     * 当月第一天星期几
     * @returns {number}
     */
    mGetDataWeek() {
        if (this.state.year !== null && this.state.month !== null) {
            var d = new Date(this.state.year, this.state.month, 0);
            d.setDate(1);
            return d.getDay();
        } else {
            var d = new Date();
            d.setDate(1);
            return d.getDay();
        }
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

