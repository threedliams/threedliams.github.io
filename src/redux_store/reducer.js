import {loadPost, loadPostList, loadPostListFromJSON, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action) {
	switch(action.type) {
		case 'LOAD_POST':
			// console.log(state);
			return loadPost(state, action.post);
		case 'LOAD_POST_LIST':
			return loadPostList(state, action.postList);
		// case 'LOAD_POST_LIST_FROM_JSON':
		// 	console.log("DOIN IT");
		// 	return loadPostListFromJSON(state);
	}
	return state;
}