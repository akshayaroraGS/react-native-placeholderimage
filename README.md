# React-Native PlaceHolderImage Component : react-native-placeholderimage
![version](https://img.shields.io/badge/version-0.0.3-green.svg)

### Preface
Are you struggling with placeholder images in react native and seeking some solution to put placeholder until your image is not downloaded from internet, you are on a right repository.

### Features
- Until image is not loaded from the given URL, some placeholder required to show that empty space.
- No placeholder image pass, then behave like react-native `image`.
- ease to implement and use.

### Installation
- Run this command `$ npm install react-native-placeholderimage --save`

### Implementation
- import in js file as `import PlaceHolderImage from 'react-native-placeholderimage';` [see example](https://github.com/akshayaroraGS/react-native-placeholderimage/blob/master/demo/index.ios.js)

```JavaScript
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
```

### Pass this Two props for Visible PlaceHolder
* this.props.placeHolderURI
* this.props.placeHolderStyle

### Available props
1. all image props
1. `placeHolderURI` : image object as `{ uri: 'place_holder_image' }`
1. *`placeHolderStyle` : style object as `{ height: 100, width: 100, backgroundColor: 'blue' }`

*placeholder image style merge as (style + placeHolderStyle + centerImageStyle)

### Feedbacks
- I love to hear your valuable feedbacks, suggestions & issues. Please raise a issue on the repo or email me (as subject: 'placeholderimage#issue &lt;topic&gt;') @ `akshayarora.gs@gmail.com`.

❤️ Voila! Happy coding...
