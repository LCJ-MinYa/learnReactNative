'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Button
} from 'react-native';

import BaseContainer from '../common/baseContainer'

class componentDataNav extends BaseContainer {
	renderDom() {
		return (
			<View>
				<Button
					onPress={()=>{this.props.navigation.navigate('fatherToChildScreen')}}
					title='父->子'
				/>
				<Button
					onPress={()=>{this.props.navigation.navigate('childToFatherScreen')}}
					title='子->父'
				/>
				<Button
					onPress={()=>{this.props.navigation.navigate('childToChildScreen')}}
					title='同级传值'
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({

});


export default componentDataNav;