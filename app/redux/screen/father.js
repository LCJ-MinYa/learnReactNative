'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text
} from 'react-native';

import BaseContainer from '../../common/baseContainer'
import ChildA from './childA'
import ChildB from './childB'

class father extends BaseContainer {
	renderDom() {
		return (
			<View>
				<ChildA/>
				<ChildB/>
			</View>
		)
	}
}

const styles = StyleSheet.create({

});


export default father;