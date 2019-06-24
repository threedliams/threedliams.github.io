import React from 'react';
import Post from './Post';

export default class ProjectMount extends React.Component {
    render() {
        var key = this.props.match.params.projectKey;
        return <Post
            title={key}
            bodyText={require('../../pages/projects/' + key + '.markdown')}
        />;
    }
};
