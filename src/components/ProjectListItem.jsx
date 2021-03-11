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
            website,
        } = this.props;

        let aboutLink = <span />;
        if (about) {
                aboutLink =  (<span>&nbsp;- <InternalLink title="about" location={about}/></span>);
        }

        let playLink = <span />;
        if (play) {
            playLink = (<span>&nbsp;- <a href={play}>play!</a>{playComment}</span>);
        }
        
        let imageTag = <span />;
        if (image) {
            imageTag = (<a href={about ? about : website}><img src={image} className="project-thumbnail"/></a>);
        }

        let websiteLink = <span />;
        if (website) {
            websiteLink = (<span>&nbsp;- <a href={website}>website</a></span>);
        }

        return (
            <div className="card">
                <li>{imageTag}<br />
                        <div  className="container">
                        {name}
                        {aboutLink}
                        {websiteLink}
                        &nbsp;- <a href={repo}>repo</a>
                        {playLink}
                    </div>
                </li>
            </div>
        );
    }
}
