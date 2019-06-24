import React from 'react';
import TopBar from './TopBar';

export default class HomePage extends React.Component {
    render() {
        document.title = "Ramsey Opp - Software Developer";
        return (
            <div className="home-page">
                <TopBar />
            </div>
        );
    }
};
