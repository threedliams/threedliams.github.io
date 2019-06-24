import React from 'react';
import TopBar from './TopBar';
import resumeText from '../../pages/resume.markdown';

import ReactMarkdown from 'react-markdown';

export default class Resume extends React.Component {
	componentDidMount() {
		document.title = "Résumé";
	}

	render() {
		return (
			<div className="resume">
				<TopBar />
				<ReactMarkdown source={resumeText} />
			</div>
		);
	}
};
