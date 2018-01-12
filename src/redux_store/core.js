import {List, Map, fromJS} from 'immutable';

export const INITIAL_STATE = loadInitialState();

export function loadPost(state, post) {
	var key = post.key;
	// console.log(INITIAL_STATE.get("postList"));
	console.log(state.get("postList"));
	// var test = require('../../pages/posts/posts.json');
	// console.log(test);
	// var test2 = fromJS({
	// 	postList: test
	// })
	// console.log(test2);
	// console.log(state);
	var filename = state.get("postList")[key].filename;
	const bodyText = require('../../pages/posts/' + filename + '.markdown');
	return state.set('post', fromJS({
		title: state.get("postList")[key].title,
		bodyText: bodyText
	}));
}

export function loadPostList(state, postList) {
	return state.set('postList', fromJS(postList));
}

function loadInitialState() {
	var postList = require('../../pages/posts/posts.json');

	for (var key in postList) {
		postList[key].bodyText = require('../../pages/posts/' + postList[key].filename + '.markdown');
	}
	return Map({postList: postList});
}

// export function loadPostListFromJSON(state) {
// 	const postJSON = require('../../pages/posts/posts.json');
// 	// console.log(postJSON);
// 	return state.set('postList', fromJS(postJSON));
// }