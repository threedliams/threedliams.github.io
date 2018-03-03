import React from 'react';

import aboutText from '../../pages/about.markdown';
import TopBar from './TopBar';

const ReactMarkdown = require('react-markdown');
const createReactClass = require('create-react-class');

export default createReactClass({
	render: function() {
		return (
			<div>
				<TopBar/>
				<ReactMarkdown source={aboutText} />
			</div>
		);
	}
});
