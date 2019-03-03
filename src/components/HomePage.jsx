import React from 'react';
import TopBar from './TopBar';

const createReactClass = require('create-react-class');

export default createReactClass({
    render: function() {
        document.title = "Ramsey Opp - Software Developer";
        return (
            <div className="home-page">
                <TopBar />
            </div>
        );
    }
});