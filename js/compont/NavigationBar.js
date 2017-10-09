/**
 * Created by liuml on 2017/9/11.
 */
import React, {Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Platform,
    Image,
    TouchableOpacity
} from 'react-native';
/**
 * 导航条
 */
export default class NavigationBar extends Component {

    static def = {
        NavigationBarHeight:35,
    }
    static propTypes = {
        //验证，不传element组件类型，会报错提示
        rightButton: PropTypes.element,
        leftButton: PropTypes.element
    }

    render() {
        return <View style={styles.container}>
            <View style={styles.container}>
                <StatusBar hidden={false} barStyle="light-content"/>
            </View>
            {/*顶部导航栏*/}
            <View style={styles.navBar}>
                <View style={styles.leftBtnStyle}>
                    {this.props.leftButton}
                </View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                <View style={styles.rightBar}>
                    {this.props.rightButton}
                </View>

            </View>
        </View>
    }
}
const styles = StyleSheet.create({

    container: {
        backgroundColor: '#63B8FF',
    },
    statusBar: {
        height: Platform.OS === 'ios' ? 20 : 0
    },
    navBar: {
        height: NavigationBar.def.NavigationBarHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    titleWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 40,
        right: 40,
    },
    title: {
        fontSize: 16,
        color: '#000'
    },
    navBtn: {
        width: 24,
        height: 24
    },
    rightBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 8
    },
    leftBtnStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

