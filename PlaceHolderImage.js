//
// Copyright © 2017-Present, Akshay.
// All rights reserved.
//
'use strict';

/**
 * Pass this Two props for Visible PlaceHolder
 * this.props.placeHolderURI
 * this.props.placeHolderStyle
 */

import React from 'react';
import { Image } from 'react-native';

export default class PlaceHolderImage extends React.Component {
	state = { placeHolderURI: this.props.placeHolderURI };

	onLoad() {
		if (this.state.placeHolderURI) {
			this.setState({ placeHolderURI: null });
		}
		if (this.props.onLoad) {
			this.props.onLoad();
		}
	}

	onError() {
		if (this.state.placeHolderURI) {
			this.setState({ placeHolderURI: null });
		}
		if (this.props.onLoad) {
			this.props.onError();
		}
	}

	renderImage() {
		return <Image {...this.props} onError={this.onError.bind(this)} onLoad={this.onLoad.bind(this)} />;
	}

	render() {
		if (this.state.placeHolderURI) {
			return (
				<Image
					key={this.props.key}
					source={this.state.placeHolderURI}
					style={[this.props.style, this.props.placeHolderStyle, { alignItems: 'center', justifyContent: 'center' }]}
				>
					{this.renderImage()}
				</Image>
			);
		}
		return this.renderImage();
	}
}
