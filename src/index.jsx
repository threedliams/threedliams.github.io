import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import reducer from './redux_store/reducer';
import {PostMountContainer} from './components/PostMount';
import {PostListContainer} from './components/PostList';
import {createStore} from 'redux';
import App from './components/App';
import Projects from './components/Projects';
import Resume from './components/Resume';
import About from './components/About';
import ProjectMount from './components/ProjectMount';
import HomePage from './components/HomePage';

import txt from '../pages/about.markdown';
import TopBar from './components/TopBar';

const store = createStore(reducer);

store.dispatch({
	type: 'SET_POST_MAP',
	postMap: require('../pages/posts/posts.json')
});


const routes = <Route component={App}>
	<Route path="/" component={HomePage} />
	<Route path="/post-list(/:tag)" component={PostListContainer} />
	<Route path="/post/:key" component={PostMountContainer} />
	<Route path="/about" component={About} />
	<Route path="/projects" component={Projects} />
	<Route path="/projects/:key" component={ProjectMount} />
	<Route path="/resume" component={Resume} />
</Route>

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>{routes}</Router>
	</Provider>,
	document.getElementById('app')
);