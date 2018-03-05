'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Platform,
	Text,
	Image
} from 'react-native';

class img extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.fontImgView}>
					{
						Platform.OS == 'ios' ? (
							<Text style={styles.fontImgText}>&#xe75b;</Text>
						) : ( 
							<Text style={styles.fontImgText}>&#xe6ca;</Text>
						)
					}
					<Text style={styles.fontImgText}>&#xe75b;</Text>
					<Text style={styles.fontImgText}>&#xe6ca;</Text>
					<Text style={styles.fontImgText}>&#xe864;</Text>
				</View>
				<Image source={require('./img/my-icon.jpg')}/>
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
	fontImgView: {
		flexDirection: 'row'
	},
	fontImgText: {
		fontFamily: 'iconfont',
		fontSize: 20,
		color: 'yellow'
	}
});


export default img;