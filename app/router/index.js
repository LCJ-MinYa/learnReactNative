'use strict';

import {
	addNavigationHelpers,
	StackNavigator,
	TabNavigator,
	DrawerNavigator
} from 'react-navigation'

import basicKnowledgeScreen from '../navigation/basicKnowledge'
import advancedKnowledgeScreen from '../navigation/advancedKnowledge'

const TabNavScreen = TabNavigator({
	advancedKnowledgeScreen: {
		screen: advancedKnowledgeScreen,
	},
	basicKnowledgeScreen: {
		screen: basicKnowledgeScreen,
	}
}, {
	lazy: true,
	tabBarPosition: 'bottom',
})

/*基础知识页面*/
import flexBoxScreen from '../flexBox'
import imgScreen from '../img'
import flatListScreen from '../flatList'
import propsScreen from '../props'
import stateScreen from '../state'
import lifeCycleScreen from '../lifeCycle'
import fetchRequestScreen from '../fetchRequest'
import globalAndAsyncStorageScreen from '../globalAndAsyncStorage'

/*进阶知识页面*/
import reactNavigationNavScreen from '../react-navigation/reactNavigationNav'
import componentDataNavScreen from '../componentData/componentDataNav'
import fatherToChildScreen from '../componentData/fatherToChild'
import childToFatherScreen from '../componentData/childToFather'
import childToChildScreen from '../componentData/childToChild'
import reduxAppScreen from '../redux/reduxApp'

const AppNavigator = StackNavigator({
	TabNavScreen: {
		screen: TabNavScreen
	},
	flexBoxScreen: {
		screen: flexBoxScreen
	},
	imgScreen: {
		screen: imgScreen
	},
	flatListScreen: {
		screen: flatListScreen
	},
	propsScreen: {
		screen: propsScreen
	},
	stateScreen: {
		screen: stateScreen
	},
	lifeCycleScreen: {
		screen: lifeCycleScreen
	},
	fetchRequestScreen: {
		screen: fetchRequestScreen
	},
	globalAndAsyncStorageScreen: {
		screen: globalAndAsyncStorageScreen
	},
	reactNavigationNavScreen: {
		screen: reactNavigationNavScreen
	},
	componentDataNavScreen: {
		screen: componentDataNavScreen
	},
	fatherToChildScreen: {
		screen: fatherToChildScreen
	},
	childToFatherScreen: {
		screen: childToFatherScreen
	},
	childToChildScreen: {
		screen: childToChildScreen
	},
	reduxAppScreen: {
		screen: reduxAppScreen
	}
}, {
	initialRouteName: 'TabNavScreen', // 默认显示界面
	// mode: 'modal', // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
	// headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
	// onTransitionStart: (nav) => {
	// 	console.log('导航栏切换开始');
	// 	console.log(nav)
	// },
	// onTransitionEnd: (nav) => {
	// 	console.log('导航栏切换结束');
	// 	console.log(nav)
	// }
})

export default AppNavigator;