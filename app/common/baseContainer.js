'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Platform,
	Text,
} from 'react-native';

class baseContainer extends Component {
	render() {
		return (
			<View  style={styles.container}>
				{
					this.renderDom ? this.renderDom() : null
				}
			</View>
		);
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
});


export default baseContainer;