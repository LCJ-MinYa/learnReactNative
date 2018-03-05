'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Button
} from 'react-native';

import {
	DrawerNavigator
} from 'react-navigation'

import BaseContainer from '../common/baseContainer'

class reactNavigationNav extends BaseContainer {
	static navigationOptions = ({
		navigation
	}) => {
		return {
			headerTitle: navigation.state.params && navigation.state.params.title,
		}
	}
	renderDom() {
		return (
			<View>
				<Button
					onPress={()=>{this.props.navigation.navigate('DrawerOpen')}}
					title='DrawerNavigator抽屉'
				/>
				<Button
					onPress={()=>{this.props.navigation.goBack(null)}}
					title='goBack()返回'
				/>
				<Button
					onPress={()=>{this.props.navigation.navigate('imgScreen')}}
					title='navigate跳转指定页面'
				/>
				<Button
					onPress={()=>{this.props.navigation.setParams({
						title: '设置标题'
					})}}
					title='setParams设置标题'
				/>
			</View>
		)
	}
	componentDidMount() {
		console.log(this.props.navigation);
	}
}

const DrawerNavigatorScreen = DrawerNavigator({
	reactNavigationNavScreen: {
		screen: reactNavigationNav,
	},
}, {
	drawerWidth: 200, // 抽屉宽
	drawerPosition: 'right',
	// contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
	// contentOptions: {
	// 	initialRouteName: Home, // 默认页面组件
	// 	activeTintColor: 'white', // 选中文字颜色
	// 	activeBackgroundColor: '#ff8500', // 选中背景颜色
	// 	inactiveTintColor: '#666', // 未选中文字颜色
	// 	inactiveBackgroundColor: '#fff', // 未选中背景颜色
	// 	style: { // 样式

	// 	}
	// }
})

export default DrawerNavigatorScreen;