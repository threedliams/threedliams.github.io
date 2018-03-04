import React from 'react';
import TopBar from './TopBar';

const createReactClass = require('create-react-class');

export default createReactClass({
    render: function() {
        return (
            <div className="home-page">
                <TopBar />
            </div>
        );
    }
});