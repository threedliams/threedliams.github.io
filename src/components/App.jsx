import React from 'react';

import 'github-markdown-css/github-markdown.css';
import '../../styles/stylesheet.css';

export default class App extends React.Component {
	render() {
		return this.props.children;
	}
};
