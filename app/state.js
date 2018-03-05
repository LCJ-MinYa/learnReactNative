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

class state extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showTitle: true
		};
	}
	render() {
		return (
			<View style={styles.container}>
				<Text>state演示</Text>
				{
					this.state.showTitle ? (
						<Text>显示title</Text>
					) : (null)
				}
				<Button
					onPress={this.doToggleTitle.bind(this)}
					title='点击切换'
					color='#333'
				/>
			</View>
		);
	}
	doToggleTitle() {
		this.setState({
			showTitle: !this.state.showTitle
		})
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


export default state;