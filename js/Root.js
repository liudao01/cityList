/* @flow */
import React, {Component} from 'react';

import {
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import RoadSide from './RoadSide'
import CityList from './CityList'

const RouteConfigs = {
    Road: {
        name: 'RoadSide',
        description: 'RoadSide',
        screen: RoadSide,
    },
    CityList: {
        name: 'CityList',
        description: 'CityList',
        screen: CityList,
    },
};


//导航器的配置，包括导航器的初始页面、各个页面之间导航的动画、页面的配置选项等等
const NavigatorConfig = {
    initialRouteName: 'Road', // 默认显示界面
    headerMode: 'none',//https://reactnavigation.org/docs/navigators/stack#StackNavigatorConfig
    /*
     * Use modal on iOS because the card mode comes from the right,
     * which conflicts with the drawer example gesture
     */
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
}

const RootNavigator = StackNavigator(RouteConfigs, NavigatorConfig);

export default RootNavigator;
