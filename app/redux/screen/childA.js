'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native';

import {
	connect
} from 'react-redux';
import {
	setMessageCount
} from '../action/message';

class childA extends Component {
	render() {
		console.log(this.props);
		const {
			message
		} = this.props;
		return (
			<View>
				<Text>子组件A</Text>
				<Text>{message}</Text>
				<Button
					onPress={()=>{this.props.dispatch(setMessageCount(this.props.message, '子组件A更改信息'))}}
					title='点击发送action'
				/>
			</View>
		);
	}
}

function selector(state) {
	console.log(state);
	return {
		message: state.message
	}
}

export default connect(selector)(childA);