'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text
} from 'react-native';

import BaseContainer from '../common/baseContainer'

class Child extends Component {
	render() {
		return (
			<View style={this.props.bgstyle}>
				<Text>{this.props.text}</Text>
			</View>
		)
	}
}

class fatherToChild extends BaseContainer {
	renderDom() {
		return (
			<View>
				<Child bgstyle={styles.childView} text={'子组件的名称'}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	childView: {
		backgroundColor: '#000000',
		width: 100,
		height: 100
	}
});


export default fatherToChild;