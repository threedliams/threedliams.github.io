import React from 'react';
import { connect } from 'react-redux';
import InternalLink from './InternalLink';
import TopBar from './TopBar';

export const PostList = class extends React.Component {
	componentDidMount() {
		document.title = "Post List";
	}

	render() {
		var postLinks = [];
		var tag = this.props.match.params.tag;
		var postMap = this.props.postMap.keySeq().toArray();

		postMap.forEach(listKey => {
			var title = this.props.postMap.get(listKey).get('title');

			// TODO: tag not found
			if (tag) {
				var postTags = this.props.postMap.get(listKey).get('tags');
				if (
					postTags
					&& postTags.indexOf(tag) > -1) {
					postLinks.push(<li key={listKey}><span className="invisible-text">as</span><InternalLink location={'/post/' + listKey} title={title} /><span className="invisible-text">df</span></li>);
				}
			}
			else {
				postLinks.push(<li key={listKey}><span className="invisible-text">as</span><InternalLink location={'/post/' + listKey} title={title} /><span className="invisible-text">df</span></li>);
			}
		});

		return (
			<div>
				<TopBar />
				<ul className="post-list">{postLinks}</ul>
			</div>
		);
	}
};

function mapStateToProps(state) {
	return {
		postMap: state.get('postMap')
	};
}

export const PostListContainer = connect(mapStateToProps)(PostList);