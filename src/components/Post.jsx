import React from 'react';
import InternalLink from './InternalLink';
import TopBar from './TopBar';

const ReactMarkdown = require('react-markdown');
const createReactClass = require('create-react-class');

export default createReactClass({
	render: function() {
		document.title = this.props.title;

		var tags = this.props.tags;
		var tagLinks = [];
		if (tags) {
			tags.forEach(function(tag) {
				tagLinks.push(<div key={tag}><InternalLink location={"/post-list/" + tag} title={tag}/></div>);
			});
		}
		if (tagLinks.length === 0) {
			tagLinks = "None";
		}

		return (
			<div>
				<TopBar />
				<ReactMarkdown source={this.props.bodyText} />
				<div>Tags:</div>
				<div>{tagLinks}</div>
			</div>
		);
	}
});

