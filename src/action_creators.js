export function loadPost(post) {
	return {
		type: 'LOAD_POST',
		post
	};
}

export function loadPostListFromJSON() {
	return {
		type: 'LOAD_POST_LIST_FROM_JSON'
	};
}