'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Platform,
	Text,
	Button
} from 'react-native';

class basicKnowledge extends Component {
	static navigationOptions = {
		tabBarLabel: '基础知识',
		headerTitle: '基础知识导航页'
	}
	render() {
		return (
			<View style={styles.container}>
				<Button
					onPress={()=>{this.props.navigation.navigate('flexBoxScreen')}}
					title='flexbox布局'
				/>
				<Button
					onPress={()=>{this.props.navigation.navigate('imgScreen')}}
					title='图片'
				/>
				<Button
					onPress={()=>{this.props.navigation.navigate('flatListScreen')}}
					title='flatList'
				/>
				<Button
					onPress={()=>{this.props.navigation.navigate('propsScreen')}}
					title='props'
				/>
				<Button
					onPress={()=>{this.props.navigation.navigate('stateScreen')}}
					title='state'
				/>
				<Button
					onPress={()=>{this.props.navigation.navigate('lifeCycleScreen')}}
					title='lifeCycle生命周期'
				/>
				<Button
					onPress={()=>{this.props.navigation.navigate('fetchRequestScreen')}}
					title='fetch网络请求'
				/>
				<Button
					onPress={()=>{this.props.navigation.navigate('globalAndAsyncStorageScreen')}}
					title='全局和本地存储'
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Platform.OS == 'ios' ? 20 : 0,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F5FCFF',
	},
});


export default basicKnowledge;