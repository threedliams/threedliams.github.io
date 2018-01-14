import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import {PostContainer} from './Post';

const createReactClass = require('create-react-class');

export const PostMount = createReactClass({
    componentWillMount: function () {
        var key = this.props.routeParams.key;
        var post = this.props.postMap.get(key);

        this.props.setPost({
            title: post.get('title'),
            tags: post.get('tags'),
            bodyText: require('../../pages/posts/' + post.get('filename') + '.markdown')
        });
    },
    render: function() {
        return <PostContainer />;
    }
});

function mapStateToProps(state) {
    return {
        postMap: state.get('postMap')
    };
}

export const PostMountContainer = connect(
    mapStateToProps,
    actionCreators
)(PostMount);