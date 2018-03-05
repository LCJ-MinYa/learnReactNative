/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    Component
} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

//设备的宽度，单位:dp
const deviceWidthDp = Dimensions.get('window').width;

type Props = {};
export default class App extends Component < Props > {
    render() {
        return (
            <View style={styles.container}>
                <Text>设备宽度:{deviceWidthDp}</Text>
                <View style={styles.testFlexBoxView}>
                    <View style={[styles.baseChildView, styles.fistChildBg]}><Text>子元素1</Text></View>
                    <View style={[styles.baseChildView, styles.secondChildBg]}><Text>子元素2</Text></View>
                    <View style={[styles.baseChildView, styles.thirdChildBg]}><Text>子元素3</Text></View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS == 'ios' ? 20 : 0,
        alignItems: 'center',
        backgroundColor: '#000',
    },
    testFlexBoxView: {
        width: deviceWidthDp,
        height: 100,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    baseChildView: {
        width: 10,
        height: 60,
        marginRight: 5,
    },
    fistChildBg: {
        backgroundColor: 'red',
    },
    secondChildBg: {
        backgroundColor: 'blue',
    },
    thirdChildBg: {
        backgroundColor: 'green',
        marginRight: 0
    }
});