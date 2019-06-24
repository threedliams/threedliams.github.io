import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reducer from './redux_store/reducer';
import { PostMountContainer} from './components/PostMount';
import { PostListContainer } from './components/PostList';
import { createStore } from 'redux';
import Projects from './components/Projects';
import Resume from './components/Resume';
import About from './components/About';
import ProjectMount from './components/ProjectMount';
import HomePage from './components/HomePage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const store = createStore(reducer);

store.dispatch({
	type: 'SET_POST_MAP',
	postMap: require('../pages/posts/posts.json')
});

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/post-list" exact component={PostListContainer} />
				<Route path="/post-list/:tag" exact component={PostListContainer} />
				<Route path="/post/:postKey" exact component={PostMountContainer} />
				<Route path="/about" component={About} />
				<Route path="/projects" exact component={Projects} />
				<Route path="/projects/:projectKey" component={ProjectMount} />
				<Route path="/resume" component={Resume} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('app')
);