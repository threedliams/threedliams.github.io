import React from 'react';
import {expect} from 'chai';
import {fromJS} from 'immutable';

import {PostList} from '../../src/components/PostList';
import PostLink from '../../src/components/PostLink';

var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({adapter: new Adapter()});

describe('<PostList />', () => {
    it('renders a list of post links', () => {
        const component = enzyme.shallow(<PostList
            routeParams={{}}
            postMap={fromJS({
                'test-post-1': {
                    title: 'title1'
                },
                'test-post-2': {
                    title: 'title2'
                }
            })}
        />);

        expect(component.find(PostLink)).to.have.length(2);
    });
});
