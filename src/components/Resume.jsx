import React from 'react';
import TopBar from './TopBar';
import resumeText from '../../pages/resume.markdown';

const ReactMarkdown = require('react-markdown');
const createReactClass = require('create-react-class');

export default createReactClass({
	render: function() {
		return (
			<div>
				<TopBar />
				<ReactMarkdown source={resumeText} />
			</div>
		);
	}
});
