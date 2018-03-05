'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
} from 'react-native';

import Router from './app/router'

class App extends Component {
	render() {
		return (
			<Router />
		);
	}
}

const styles = StyleSheet.create({

});


export default App;