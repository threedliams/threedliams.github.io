import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import reducer from './redux_store/reducer';
import {PostMountContainer} from './components/PostMount';
import {PostListContainer} from './components/PostList';
import {createStore} from 'redux';
import App from './components/App';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import Resume from './components/Resume';
import About from './components/About';

import txt from '../pages/about.markdown';

const store = createStore(reducer);

store.dispatch({
	type: 'SET_POST_MAP',
	postMap: require('../pages/posts/posts.json')
});

// console.log(store.getState());

// store.dispatch({
// 	type: 'LOAD_POST',
// 	post: {
// 		title: "Test title",
// 		filename: "test"
// 	}
// });

// store.dispatch({
// 	type: 'LOAD_POST_LIST',
// 	postList: [
// 		{
// 			title: "Test title1",
// 			filename: "./posts/test.markdown"
// 		},
// 		{
// 			title: "Test title2",
// 			filename: "./posts/test2.markdown"
// 		}
// 	]
// });
// console.log(store.getState().get("postList"));

// var postComponents = {};
// for (var key in store.getState().get("postList")) {
// 	postComponents[key] = <Post />;
// }


const routes = <Route component={App}>
	<Route path="/" component={HomePage} />
	<Route path="/post-list(/:tag)" component={PostListContainer} />
	<Route path="/post/:key" component={PostMountContainer} />
	<Route path="/about" component={About} />
	<Route path="/projects" component={Projects} />
	<Route path="/resume" component={Resume} />
</Route>

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>{routes}</Router>
	</Provider>,
	document.getElementById('app')
);