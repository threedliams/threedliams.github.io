import React from 'react';
import TopBar from './TopBar';
import InternalLink from './InternalLink';

export default class Projects extends React.Component {
	componentDidMount() {
		document.title = "Projects";
	}
	render() {
		return (
			<div>
				<TopBar />
				<ul className="project-list">
					<li>CallbackBot (narcov) - <InternalLink
							title="about"
							location='/projects/narcov'
						/>
						&nbsp;- <a href="https://github.com/threedliams/CallbackBot">repo</a>
					</li>

					<li>Particle Filter Localization - <InternalLink
							title="about"
							location='/projects/localization'
						/>
						&nbsp;- <a href="https://github.com/EricFalkenberg/particle_filter_localization">repo</a>
					</li>

					<li>HughBorg - <InternalLink
						title="about"
						location='/projects/hughborg'
						/>
						&nbsp;- <a href="https://github.com/threedliams/HughBorg">repo</a>
					</li>

					<li>
						This website - <InternalLink
							title="about"
							location='/projects/website'
						/>
						&nbsp;- <a href="https://github.com/threedliams/threedliams.github.io">repo</a>
					</li>

					<li>Crappy Games - <InternalLink
							title="about"
							location='/projects/crappyGames'
						/>
						&nbsp;- <a href="https://github.com/threedliams/CrappyGames">repo</a>
						&nbsp;- <a href="https://threedliams.github.io/pages/assets/games/CrappyGames/bin/index.html">play!</a>
					</li>

					<li>MonkeyProto - <InternalLink
							title="about"
							location='/projects/monkeyProto'
						/>
						&nbsp;- <a href="https://github.com/threedliams/MonkeyProto">repo</a>
						&nbsp;- <a href="https://threedliams.github.io/pages/assets/games/MonkeyProto/bin/index.html">play!</a> (only works with 2 controllers)
					</li>

					<li>Old Roguelike - <InternalLink
							title="about"
							location='/projects/oldRoguelike'
						/>
						&nbsp;- <a href="https://github.com/threedliams/MutationRoguelike">repo</a>
					</li>
				</ul>
			</div>
		);
	}
};
