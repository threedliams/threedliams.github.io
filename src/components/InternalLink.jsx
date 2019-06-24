import React from 'react';
import { Link } from 'react-router-dom';

export default class InternalLink extends React.Component {
    render() {
        return <Link to={this.props.location}>{this.props.title}</Link>
    }
};
