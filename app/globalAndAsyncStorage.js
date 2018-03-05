'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	AsyncStorage,
	Platform,
	Button
} from 'react-native';

let Global = {};

class globalAndAsyncStorage extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Button
					onPress={this.doDelData.bind(this)}
					title='点击删除本地存储'
					color='#333'
				/>
			</View>
		);
	}
	componentDidMount() {
		this.doGlobal();

		this.doAsyncStorage();
	}
	doGlobal() {
		console.log(Global);
		Global.globalMsg = 'global全局信息';
		console.log(Global);
	}
	async doAsyncStorage() {
		let getVal = await AsyncStorage.getItem('AsyncStorageMsg');
		console.log(getVal);
		await AsyncStorage.setItem('AsyncStorageMsg', 'AsyncStorage本地存储信息');
		let newGetVal = await AsyncStorage.getItem('AsyncStorageMsg');
		console.log(newGetVal);
	}
	doDelData() {
		AsyncStorage.removeItem('AsyncStorageMsg')
			.then(() => {
				console.log('删除成功');
			})
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Platform.OS == 'ios' ? 20 : 0,
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});


export default globalAndAsyncStorage;