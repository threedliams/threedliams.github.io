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
            image,
        } = this.props;

        let playLink = <span />;
        if (play) {
            playLink = (<span>&nbsp;- <a href={play}>play!</a>{playComment}</span>)
        }
        
        let imageTag = <span />;
        if (image) {
            imageTag = (<a href={about}><img src={image} className="project-thumbnail"/></a>);
        }

        return (
            <div className="card">
                <li>{imageTag}<br />
                        <div  className="container">
                        {name} - <InternalLink
                            title="about"
                            location={about}
                        />
                        &nbsp;- <a href={repo}>repo</a>
                        {playLink}
                    </div>
                </li>
            </div>
        );
    }
}
