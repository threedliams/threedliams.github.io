import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import TagLink from './TagLink';

const ReactMarkdown = require('react-markdown');
const createReactClass = require('create-react-class');

export const Post = createReactClass({
	componentDidMount: function() {
		var key = this.props.routeParams.key;

		document.title = this.props.postList[key].title;

	},
	render: function() {
		var key = this.props.routeParams.key;
		var tags = this.props.postList[key].tags;

		var tagLinks = [];
		tags.forEach(function(tag) {
			tagLinks.push(<div key={tag}><TagLink tag={tag} /></div>);
		});
		if (tagLinks.length === 0) {
			tagLinks = "None";
		}

		return (
			<div>
				<ReactMarkdown source={this.props.postList[key].bodyText} />
				<div>Tags:</div>
				<div>{tagLinks}</div>
			</div>
		);
	}
});

function mapStateToProps(state) {
	return {
		postList: state.get('postList')
	};
}

export const PostContainer = connect(
	mapStateToProps,
	actionCreators
)(Post);

