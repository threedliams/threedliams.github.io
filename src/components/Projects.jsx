import React from 'react';
import TopBar from './TopBar';
import InternalLink from './InternalLink';

const createReactClass = require('create-react-class');

export default createReactClass({
	render: function() {
		return (
			<div>
				<TopBar />
				<ul className="project-list">
					<li>CallbackBot (narcov) - <InternalLink
							title="about"
							location='/projects/narcov'
						/> - <a href="https://github.com/threedliams/CallbackBot">repo</a>
					</li>

					<li>Particle Filter Localization - <InternalLink
							title="about"
							location='/projects/localization'
						/> - <a href="https://github.com/EricFalkenberg/particle_filter_localization">repo</a>
					</li>

					<li>HughBorg - <InternalLink
						title="about"
						location='/projects/hughbork'
						/> - <a href="https://github.com/threedliams/HughBorg">repo</a>
					</li>

					<li>
						This website - <InternalLink
							title="about"
							location='/projects/website'
						/> - <a href="https://github.com/threedliams/threedliams.github.io">repo</a>
					</li>

					<li>Crappy Games - <InternalLink
							title="about"
							location='/projects/crappyGames'
						/> - <a href="https://github.com/threedliams/CrappyGames">repo</a>
					</li>

					<li>MonkeyProto - <InternalLink
							title="about"
							location='/projects/monkeyProto'
						/> - <a href="https://github.com/threedliams/MonkeyProto">repo</a>
					</li>

					<li>Old Roguelike - <InternalLink
							title="about"
							location='/projects/oldRoguelike'
						/> - <a href="https://github.com/threedliams/MutationRoguelike">repo</a>
					</li>
				</ul>
			</div>
		);
	}
});
