import React from 'react';
import Post from './Post';
import { Redirect } from "react-router-dom"

const aliases = {
    narcov: "callback-bot",
    callbackbot: "callback-bot",
    oldroguelike: "old-roguelike",
    monkeyproto: "monkey-proto",
    crappygames: "crappy-games",
};

export default class ProjectMount extends React.Component {

    render() {
        var key = this.props.match.params.projectKey;
        key = key.toLowerCase();

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
