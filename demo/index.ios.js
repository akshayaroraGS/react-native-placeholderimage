/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, AppRegistry } from 'react-native';
import PlaceHolderImage from 'react-native-placeholderimage';

export default class PlaceHolderImageViewDemo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<PlaceHolderImage
					style={{ height: 100, width: 100, alignSelf: 'center', justifyContent: 'center' }}
					source={{ uri: 'https://images4.alphacoders.com/171/thumb-1920-171916.jpg' }}
					placeHolderURI={{ uri: 'place_holder_image' }}
					placeHolderStyle={{ height: 100, width: 100, backgroundColor: 'blue' }}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	}
});

AppRegistry.registerComponent('PlaceHolderImageView', () => PlaceHolderImageViewDemo);
