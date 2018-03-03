import React from 'react';
import Post from './Post';


const createReactClass = require('create-react-class');

export default createReactClass({
    render: function() {
        var key = this.props.routeParams.key;
        return <Post
            title={key}
            bodyText={require('../../pages/projects/' + key + '.markdown')}
        />;
    }
});