import {List, Map, fromJS} from 'immutable';

export const INITIAL_STATE = Map();

export function setPostMap(state, postMap) {
	return state.set('postMap', fromJS(postMap));
}

export function setPost(state, post) {
	debugger;
	return state.set('post', fromJS(post));
}