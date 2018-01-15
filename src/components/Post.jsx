import React from 'react';
import TagLink from './TagLink';

const ReactMarkdown = require('react-markdown');
const createReactClass = require('create-react-class');

export default createReactClass({
	render: function() {
		document.title = this.props.title;

		var tagLinks = [];
		this.props.tags.forEach(function(tag) {
			tagLinks.push(<div key={tag}><TagLink tag={tag} /></div>);
		});
		if (tagLinks.length === 0) {
			tagLinks = "None";
		}

		return (
			<div>
				<ReactMarkdown source={this.props.bodyText} />
				<div>Tags:</div>
				<div>{tagLinks}</div>
			</div>
		);
	}
});

