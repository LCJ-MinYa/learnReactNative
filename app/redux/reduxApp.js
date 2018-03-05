'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
} from 'react-native';

import {
	Provider
} from 'react-redux';
import {
	createStore
} from 'redux';

import AppReducer from './reducers';
import App from './screen/father';

class reduxApp extends React.Component {
	/* 
	 * 1.创建store对象,将store传递给Provider
	 * 2.所有的应用组件做为Provider的子组件
	 * 3.Provider自身实现了将store作为props传递给子组件
	 */
	store = createStore(AppReducer);
	render() {
		return (
			<Provider store={this.store}>
        		<App ref="RootMain"/>
      		</Provider>
		);
	}
}

export default reduxApp;