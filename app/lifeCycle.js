'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	Platform,
	Button
} from 'react-native';

class Child extends Component {
	constructor(props) {
		console.log('儿子构造函数constructor');
		super(props);

		this.state = {};
	}
	render() {
		console.log('儿子渲染视图render');
		return (
			<View style={styles.childView}>
				<Text>子组件</Text>
			</View>
		);
	}
	componentWillMount() {
		console.log('儿子将要加载到虚拟DOM componentWillMount');
	}
	componentDidMount() {
		console.log('儿子已经加载到虚拟DOM componentDidMount');
	}
	componentWillReceiveProps(nextProps) {
		console.log('儿子Props改变时 componentWillReceiveProps', nextProps);
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('儿子Props和State改变是否应该渲染 shouldComponentUpdate');
		return true;
	}
	componentDidUpdate(preProps, preState) {
		console.log('儿子组件已经更新完毕 componentDidUpdate');
	}
	componentWillUnmount() {
		console.log('儿子虚拟DOM卸载 componentWillUnmount');
	}
}

class lifeCycle extends Component {
	constructor(props) {
		console.log('父亲构造函数constructor');
		super(props);

		this.state = {
			isShowChild: true
		};
	}
	render() {
		console.log('父亲渲染视图render');
		return (
			<View style={styles.container}>
				{
					this.state.isShowChild ? (
						<Child/>
					) : (null)
				}
				{/*<Child/>*/}
				<Button
					onPress={this.doToggleChild.bind(this)}
					title='点击切换子组件显示'
					color='#333'
				/>
			</View>
		);
	}
	doToggleChild() {
		this.setState({
			isShowChild: !this.state.isShowChild
		})
	}
	componentWillMount() {
		console.log('父亲将要加载到虚拟DOM componentWillMount');
	}
	componentDidMount() {
		console.log('父亲已经加载到虚拟DOM componentDidMount');
	}
	componentWillReceiveProps(nextProps) {
		console.log('父亲Props改变时 componentWillReceiveProps', nextProps);
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('父亲Props和State改变是否应该渲染 shouldComponentUpdate');
		return true;
	}
	componentDidUpdate(preProps, preState) {
		console.log('父亲组件已经更新完毕 componentDidUpdate');
	}
	componentWillUnmount() {
		console.log('父亲虚拟DOM卸载 componentWillUnmount');
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
	childView: {
		width: 100,
		height: 100,
		backgroundColor: 'yellow'
	}
});


export default lifeCycle;