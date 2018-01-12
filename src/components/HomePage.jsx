import React from 'react';
import {Link} from 'react-router';

var createReactClass = require('create-react-class');

export default createReactClass({
	render: function() {
		return <ul>
			<li><Link to="/post-list">Devlog</Link></li>
			<li><Link to="/projects">Projects</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/resume">Resume</Link></li>
		</ul>;
	}
});