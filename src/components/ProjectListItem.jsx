import React from 'react';
import InternalLink from './InternalLink';

export default class ProjectListItem extends React.Component {
    render() {
        const {
            name,
            about,
            repo,
            play,
            playComment,
        } = this.props;

        let playLink = <span />;
        if (play) {
            playLink = (<span>&nbsp;- <a href={play}>play!</a>{playComment}</span>)
        }

        return (
            <li>{name} - <InternalLink
                    title="about"
                    location={about}
                />
                &nbsp;- <a href={repo}>repo</a>
                {playLink}
            </li>
        );
    }
}
