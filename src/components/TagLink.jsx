import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

const createReactClass = require('create-react-class');

export default createReactClass({
	render: function() {
		return <Link to={"/post-list/" + this.props.tag}>{this.props.tag}</Link>;
	}
});