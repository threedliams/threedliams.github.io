import React from 'react';
import {connect} from 'react-redux';
import PostLink from './PostLink';

const createReactClass = require('create-react-class');

export const PostList = createReactClass({
	componentDidMount: function() {
		document.title = "Post List";
	},
	render: function() {
		var postLinks = [];
		var tag = this.props.routeParams.tag;
		var postMap = this.props.postMap.keySeq().toArray();

		postMap.forEach(listKey => {
			var title = this.props.postMap.get(listKey).get('title');

			// TODO: tag not found
			if (tag) {
				var postTags = this.props.postMap.get(listKey).get('tags');
				if (
					postTags
					&& postTags.indexOf(tag) > -1) {
					postLinks.push(<li key={listKey}><PostLink listKey={listKey} title={title} /></li>);
				}
			}
			else {
				postLinks.push(<li key={listKey}><PostLink listKey={listKey} title={title} /></li>);
			}
		});

		return <ul>{postLinks}</ul>;
	}
});

function mapStateToProps(state) {
	return {
		postMap: state.get('postMap')
	};
}

export const PostListContainer = connect(mapStateToProps)(PostList);