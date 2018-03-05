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

class advancedKnowledge extends Component {
	static navigationOptions = {
		tabBarLabel: '进阶知识',
		headerTitle: '进阶知识导航页'
	}
	render() {
		return (
			<View style={styles.container}>
				<Button
					onPress={()=>{this.props.navigation.navigate('reactNavigationNavScreen')}}
					title='react-navigation导航'
				/>
				<Button
					onPress={()=>{this.props.navigation.navigate('componentDataNavScreen')}}
					title='组件传值'
				/>
				<Button
					onPress={()=>{this.props.navigation.navigate('reduxAppScreen')}}
					title='redux'
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


export default advancedKnowledge;