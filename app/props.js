'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Platform,
	Text,
	TouchableOpacity
} from 'react-native';

class PropsChild extends Component {
	render() {
		return (
			<View style={[styles.propsChildView,{backgroundColor: this.props.bgColor}]}>
				<Text>{this.props.name}</Text>
			</View>
		);
	}
}

class props extends Component {
	render() {
		return (
			<View style={styles.container}>
				<PropsChild
					bgColor='red'
					name='子组件一'
				/>
				<PropsChild
					bgColor='green'
					name='子组件二'
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
		backgroundColor: '#F5FCFF',
	},
	propsChildView: {
		width: 200,
		height: 200,
	}
});


export default props;