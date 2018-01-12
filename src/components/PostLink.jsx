import React from 'react';
import {Link} from 'react-router';

const createReactClass = require('create-react-class');

export default createReactClass({
	render: function() {
		return <Link to={"/post/" + this.props.listKey}>{this.props.title}</Link>;
	}
});