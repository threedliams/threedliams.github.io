import {List, Map, fromJS} from 'immutable';
import chai, {expect} from 'chai';
import sinon from 'sinon';
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);

import * as core from '../../src/redux_store/core';

describe('devlog loader', () => {

	describe('setPostMap', () => {

		it('sets the titles, filename, and tags of the blog posts', () => {
			const state = Map();
			const postMap = fromJS({
				'test-title-1': {
					'title': 'Test Title 1',
					'filename': 'testFile1',
					'tags': [
						'test'
					]
				},
				'test-title-2': {
					'title': 'Test Title 2',
					'filename': 'testFile2',
					'tags': [
						'test'
					]
				}
			});

			const nextState = core.setPostMap(state, postMap);
			expect(nextState).to.equal(fromJS({
				postMap: {
					'test-title-1': {
						'title': 'Test Title 1',
						'filename': 'testFile1',
						'tags': [
							'test'
						]
					},
					'test-title-2': {
						'title': 'Test Title 2',
						'filename': 'testFile2',
						'tags': [
							'test'
						]
					}
				}
			}));
		});

		it('converts to immutable', () => {
			const initialState = Map();
			const postMap = {
				'test-title-1': {
					'title': 'Test Title 1',
					'filename': 'testFile1',
					'tags': [
						'test'
					]
				},
				'test-title-2': {
					'title': 'Test Title 2',
					'filename': 'testFile2',
					'tags': [
						'test'
					]
				}
			};

			const nextState = core.setPostMap(initialState, postMap);
			expect(nextState).to.equal(fromJS({
				postMap: {
					'test-title-1': {
						'title': 'Test Title 1',
						'filename': 'testFile1',
						'tags': [
							'test'
						]
					},
					'test-title-2': {
						'title': 'Test Title 2',
						'filename': 'testFile2',
						'tags': [
							'test'
						]
					}
				}
			}));
		});

	});

	describe('setPost', () => {

		it('sets the title, tags, and body text of the post', () => {
			const initialState = Map();
			const post = {
				'test-title-1': {
					'title': 'Test Title 1',
					'bodyText': 'This is the body text',
					'tags': [
						'test'
					]
				}
			};

			const nextState = core.setPost(initialState, post);
			expect(nextState).to.equal(fromJS({
				post: {
					'test-title-1': {
						'title': 'Test Title 1',
						'bodyText': 'This is the body text',
						'tags': [
							'test'
						]
					}
				}
			}));
		});

	});

});