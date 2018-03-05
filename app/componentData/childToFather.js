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

import BaseContainer from '../common/baseContainer'

class Child extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '子组件'
		};
	}
	render() {
		return (
			<View>
				<Text>{this.state.text}</Text>
				<Button
					onPress={()=>{this.props.getChildVal(this.state.text)}}
					title='向父组件传值'
				/>
			</View>
		)
	}
}

class fatherToChild extends BaseContainer {
	renderDom() {
		return (
			<View>
				<Child getChildVal={this.getChildVal}/>
			</View>
		)
	}
	getChildVal(val) {
		console.log('获得子组件传值为:' + val);
	}
}

const styles = StyleSheet.create({

});


export default fatherToChild;