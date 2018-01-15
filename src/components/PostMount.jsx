import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import Post from './Post';

const createReactClass = require('create-react-class');

export const PostMount = createReactClass({
    render: function() {
        var key = this.props.routeParams.key;
        var post = this.props.postMap.get(key);
        return <Post 
            title={post.get('title')}
            tags={post.get('tags')}
            bodyText={require('../../pages/posts/' + post.get('filename') + '.markdown')}
        />;
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