import React from 'react';
import Post from './Post';
import { Redirect } from "react-router-dom"

const aliases = {
    narcov: "CallbackBot",
};

export default class ProjectMount extends React.Component {

    render() {
        var key = this.props.match.params.projectKey;

        if (aliases[key]) {
            return this.redirectAlias(aliases[key]);
        }

        return <Post
            title={key}
            bodyText={require('../../pages/projects/' + key + '.markdown')}
        />;
    }

    redirectAlias(to) {
        return <Redirect
            to={"/projects/" + to}
        />;
    }
};
