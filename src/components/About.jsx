import React from 'react';

import aboutText from '../../pages/about.markdown';
import TopBar from './TopBar';

import ReactMarkdown from 'react-markdown';

export default class About extends React.Component {
	componentDidMount() {
		document.title = "About";

		const startDate = new Date(2002, 3);
		const now = new Date();
		document.getElementById("pianoYears").innerHTML = Math.floor((now - startDate) / (1000 * 3600 * 24 * 365));
	}

	render() {
		return (
			<div className="about">
				<TopBar/>
				<ReactMarkdown source={aboutText} escapeHtml={false}/>
			</div>
		);
	}
};
