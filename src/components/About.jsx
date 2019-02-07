import React from 'react';

import aboutText from '../../pages/about.markdown';
import TopBar from './TopBar';

const ReactMarkdown = require('react-markdown');
const createReactClass = require('create-react-class');

export default createReactClass({
	componentDidMount: function() {
		document.title = "About";
	},

	render: function() {
		return (
			<div className="about">
				<TopBar/>
				<ReactMarkdown source={aboutText}/>
			</div>
		);
	}
});
