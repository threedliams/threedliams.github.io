import React from 'react';

var createReactClass = require('create-react-class');

require('github-markdown-css/github-markdown.css');
require('../../styles/stylesheet.css');

export default createReactClass({
	render: function() {
		return this.props.children;
	}
});
