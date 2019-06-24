import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../action_creators';
import Post from './Post';
import { withRouter } from 'react-router-dom';

export const PostMount = class extends React.Component {
    // TODO: post not found
    render() {
        var key = this.props.match.params.postKey;
        var post = this.props.postMap.get(key);
        return <Post 
            title={post.get('title')}
            tags={post.get('tags')}
            bodyText={require('../../pages/posts/' + post.get('filename') + '.markdown')}
        />;
    }
};

function mapStateToProps(state) {
    return {
        postMap: state.get('postMap')
    };
}

export const PostMountContainer = withRouter(connect(
    mapStateToProps,
    actionCreators
)(PostMount));
