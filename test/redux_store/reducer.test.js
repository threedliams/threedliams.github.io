import {Map, fromJS} from 'immutable';
import chai, {expect} from 'chai';
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);

import reducer from '../../src/redux_store/reducer';

describe('reducer', () => {

	it('handles SET_POST_MAP', () => {
		const initialState = Map();
		const action = {type: 'SET_POST_MAP', postMap: {
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
		}};

		const nextState = reducer(initialState, action);
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

	it('handles SET_POST', () => {
		const initialState = Map();
		const action = {type: 'SET_POST', post: {
			'test-title-1': {
				'title': 'Test Title 1',
				'bodyText': 'This is the body text',
				'tags': [
					'test'
				]
			}
		}};

		const nextState = reducer(initialState, action);
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