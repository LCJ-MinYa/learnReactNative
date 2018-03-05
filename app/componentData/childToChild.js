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

class ChildA extends Component {
	render() {
		return (
			<View>
				<Text>子组件A</Text>
				<Text>{this.props.faterName}</Text>
				<Button
					onPress={()=>{this.props.getChildVal('父组件名字叫父亲大人')}}
					title='向父组件传值改变子组件B的值'
				/>
			</View>
		)
	}
}

class ChildB extends Component {
	render() {
		return (
			<View>
				<Text>子组件B</Text>
				<Text>{this.props.faterName}</Text>
			</View>
		)
	}
}

class Father extends BaseContainer {
	constructor(props) {
		super(props);

		this.state = {
			faterName: '父组件改名叫爸爸'
		};
	}
	renderDom() {
		return (
			<View>
				<ChildA faterName={this.state.faterName} getChildVal={this.getChildVal.bind(this)}/>
				<ChildB faterName={this.state.faterName}/>
			</View>
		)
	}
	getChildVal(val) {
		console.log('获得子组件传值为:' + val);
		this.setState({
			faterName: val
		})
	}
}

const styles = StyleSheet.create({

});


export default Father;