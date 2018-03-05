'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	Platform,
} from 'react-native';

class fetchRequest extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>fetch请求</Text>
			</View>
		);
	}
	componentDidMount() {
		fetch('https://facebook.github.io/react-native/movies.json')
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
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


export default fetchRequest;