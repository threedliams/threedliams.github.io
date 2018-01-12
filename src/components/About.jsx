import React from 'react';

import aboutText from '../../pages/about.markdown';

const ReactMarkdown = require('react-markdown');
const createReactClass = require('create-react-class');

export default createReactClass({
	render: function() {
		return <ReactMarkdown source={aboutText} />;
	}
});
