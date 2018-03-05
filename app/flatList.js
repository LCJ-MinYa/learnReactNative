'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	Platform,
	FlatList,
	Button
} from 'react-native';

class flatList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [{
				text: '列表1'
			}, {
				text: '列表2'
			}, {
				text: '列表3'
			}, {
				text: '列表4'
			}, {
				text: '列表5'
			}]
		};
	}
	render() {
		return (
			<View style={styles.container}>
				<FlatList
				  	data={this.state.data}
				  	keyExtractor={(item, index) => index.toString()}
				  	renderItem={({item}) => <Text>{item.text}</Text>}
				/>
				<Button
					onPress={this.doAddData.bind(this)}
					title='点击增加数据'
					color='#333'
				/>
			</View>
		);
	}
	doAddData() {
		let newData = [];
		const length = this.state.data.length;
		for (let i = 1; i <= 5; i++) {
			newData.push({
				text: '列表' + (length + i)
			})
		}
		this.setState({
			data: this.state.data.concat(newData)
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


export default flatList;