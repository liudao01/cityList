/**
 * Created by liuml on 2017/9/29.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Modal,
    Text,
    ListView,
    Platform,
    Dimensions,
    StyleSheet,
    RefreshControl,
    Alert,
    TextInput
} from 'react-native';

export default class RoadSide extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            city: '全国'
        }
    }

    //跳转城市选择navigation里面的navigate方法
    gotoCityList = () => {
        const navigate = this.props.navigation.navigate;
        navigate('CityList', {
            callback: (city) => {
                this.setState({
                    city: city
                })
            }
        });
    }

    render() {
        return <View style={styles.container}>
            <Text style={{width: 100, height: 50}}
                  onPress={this.gotoCityList}>
                {`点击跳转 当前城市${this.state.city}`}
            </Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})