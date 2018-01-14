import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import TagLink from './TagLink';

const ReactMarkdown = require('react-markdown');
const createReactClass = require('create-react-class');

export const Post = createReactClass({
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

function mapStateToProps(state) {
	debugger;
	return {
		title: state.getIn(['post', 'title']),
		bodyText: state.getIn(['post', 'bodyText']),
		tags: state.getIn(['post', 'tags'])
	};
}

export const PostContainer = connect(
	mapStateToProps,
	actionCreators
)(Post);

