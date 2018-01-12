import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../../src/redux_store/reducer';

describe('reducer', () => {

	it('handles LOAD_POST', () => {
		const initialState = Map();
		const action = {type: 'LOAD_POST', post: {
			title: 'Test Title',
			bodyText: 'Test text.'
		}};
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(fromJS({
			post: {
				title: 'Test Title',
				bodyText: 'Test text.'
			}
		}));
	});

	it('handles LOAD_POST_LIST', () => {
		const initialState = Map();
		const action = {type: 'LOAD_POST_LIST', postList: [
			{
				title: 'First Title',
				filename: 'firstPost'
			},
			{
				title: 'Second Title',
				filename: 'secondPost'
			}
		]};
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(fromJS({
			postList: [
				{
					title: 'First Title',
					filename: 'firstPost'
				},
				{
					title: 'Second Title',
					filename: 'secondPost'
				}
			]
		}));
	});

});