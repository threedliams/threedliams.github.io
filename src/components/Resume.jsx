import React from 'react';
import TopBar from './TopBar';
import resumeText from '../../pages/resume.markdown';

const ReactMarkdown = require('react-markdown');
const createReactClass = require('create-react-class');

export default createReactClass({
	componentDidMount: function() {
		document.title = "Résumé";
	},
	render: function() {
		return (
			<div>
				<TopBar />
				<ReactMarkdown source={resumeText} />
			</div>
		);
	}
});
