import * as core from './core';

export default function reducer(state = core.INITIAL_STATE, action) {
	switch(action.type) {
		case 'LOAD_POST':
			return loadPost(state, action.post);
		case 'LOAD_POST_LIST':
			return loadPostList(state, action.postList);
		case 'SET_POST_MAP':
			return core.setPostMap(state, action.postMap);
		case 'SET_POST':
			return core.setPost(state, action.post);
	}
	return state;
}