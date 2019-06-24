import React from 'react';

import aboutText from '../../pages/about.markdown';
import TopBar from './TopBar';

import ReactMarkdown from 'react-markdown';

export default class About extends React.Component {
	componentDidMount() {
		document.title = "About";
	}

	render() {
		return (
			<div className="about">
				<TopBar/>
				<ReactMarkdown source={aboutText}/>
			</div>
		);
	}
};
