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

		// for (var i = 0; i < this.props.postList.size; i++) {
		// 	var filename = this.props.postList.get(i).get('filename');
		// 	var title = this.props.postList.get(i).get('title');
		// 	postLinks.push(<li key={i}><PostLink filename={filename} title={title} /></li>);
		// }
		var tag = this.props.routeParams.tag;

		for (var listKey in this.props.postList) {
			var title = this.props.postList[listKey].title;

			if (tag) {
				var postTags = this.props.postList[listKey].tags;
				if (postTags.indexOf(tag) > -1) {
					postLinks.push(<li key={listKey}><PostLink listKey={listKey} title={title} /></li>);
				}
			}
			else {
				postLinks.push(<li key={listKey}><PostLink listKey={listKey} title={title} /></li>);
			}
		}

		return <ul>{postLinks}</ul>;
	}
});

function mapStateToProps(state) {
	return {
		postList: state.get('postList')
	};
}

export const PostListContainer = connect(mapStateToProps)(PostList);