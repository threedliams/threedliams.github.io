import React from 'react';
import { Link } from 'react-router-dom';

export default class TopBar extends React.Component {
	render() {
		return <ul className="home-links">
			<li><Link to="/about">About</Link></li>
			<li><Link to="/projects">Projects</Link></li>
			<li><Link to="/post-list">Thoughts</Link></li>
			<li><Link to="/resume">Résumé</Link></li>
		</ul>;
	}
};
