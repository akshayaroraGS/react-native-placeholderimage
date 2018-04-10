//
// Copyright © 2017-Present, Akshay.
// All rights reserved.
//
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, View } from 'react-native';

export default class PlaceHolderImage extends React.Component {
	static propTypes = {
		placeHolderURI: PropTypes.number,
		placeHolderStyle: PropTypes.object,
		hidePlaceholderOnLoad: PropTypes.bool
	};

	static defaultProps = {
		placeHolderURI: null,
		placeHolderStyle: null,
		hidePlaceholderOnLoad: true
	};

	state = { showPlaceholder: true };

	onLoad() {
		this.props.hidePlaceholderOnLoad && this.setState({ showPlaceholder: false });
		this.props.onLoad && this.props.onLoad();
	}

	renderImage() {
		if (this.props.source) {
			return <Image {...this.props} onLoad={this.onLoad.bind(this)} />;
		}
	}

	render() {
		if (this.props.placeHolderURI && this.state.showPlaceholder) {
			return (
				<ImageBackground
					key={this.props.key}
					source={this.props.placeHolderURI}
					style={[this.props.style, this.props.placeHolderStyle, { alignItems: 'center', justifyContent: 'center' }]}
				>
					{this.renderImage()}
				</ImageBackground>
			);
		}
		return this.props.source ? this.renderImage() : <View />;
	}
}
