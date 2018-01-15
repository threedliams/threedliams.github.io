import React from 'react';
import {expect} from 'chai';

import Post from '../../src/components/Post';
import TagLink from '../../src/components/TagLink';

var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({adapter: new Adapter()});

describe('<Post />', () => {
    it('renders body text from markdown input', () => {
        const ReactMarkdown = require('react-markdown');
        const component = enzyme.shallow(<Post
            bodyText="test text"
            tags={["test"]}
        />);

        expect(component.find(ReactMarkdown).html()).to.equal(
            '<div><p>test text</p></div>'
        );
    });

    it('renders a list of tags', () => {
        const component = enzyme.shallow(<Post
            tags={["tag 1", "tag 2"]}
        />);

        expect(component.find(TagLink)).to.have.length(2);
    });
});
