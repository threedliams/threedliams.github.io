import {List, Map} from 'immutable';
import {expect} from 'chai';

import {loadPost, loadPostList} from '../../src/redux_store/core';

describe('devlog loader', () => {

	describe('loadPost', () => {

		it('loads the information about a blog post', () => {
			const state = Map();
			const post = Map({
				title: 'Test Title',
				bodyText: 'Test text.'
			});
			// tags
			// images

			const nextState = loadPost(state, post);
			expect(nextState).to.equal(Map({
				post: Map({
					title: 'Test Title',
					bodyText: 'Test text.'
				})
			}));
		});

		it('converts to immutable', () => {
			const state = Map();
			const post = {
				title: 'Test Title',
				bodyText: 'Test text.'
			};
			// tags
			// images

			const nextState = loadPost(state, post);
			expect(nextState).to.equal(Map({
				post: Map({
					title: 'Test Title',
					bodyText: 'Test text.'
				})
			}));
		});

	});

	describe('loadPostList', () => {

		it('loads the titles and links to the blog posts', () => {
			const state = Map();
			const postList = List.of(
				Map({
					title: 'First Title',
					filename: 'firstPost'
				}),
				Map({
					title: 'Second Title',
					filename: 'secondPost'
				})
			);

			const nextState = loadPostList(state, postList);
			expect(nextState).to.equal(Map({
				postList: List.of(
					Map({
						title: 'First Title',
						filename: 'firstPost'
					}),
					Map({
						title: 'Second Title',
						filename: 'secondPost'
					})
				)
			}));
		});

		it('converts to immutable', () => {
			const state = Map();
			const postList = [
				{
					title: 'First Title',
					filename: 'firstPost'
				},
				{
					title: 'Second Title',
					filename: 'secondPost'
				}
			];

			const nextState = loadPostList(state, postList);
			expect(nextState).to.equal(Map({
				postList: List.of(
					Map({
						title: 'First Title',
						filename: 'firstPost'
					}),
					Map({
						title: 'Second Title',
						filename: 'secondPost'
					})
				)
			}));
		});

	});

});