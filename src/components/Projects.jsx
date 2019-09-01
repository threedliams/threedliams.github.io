import React from 'react';
import TopBar from './TopBar';
import InternalLink from './InternalLink';
import ProjectListItem from './ProjectListItem';

export default class Projects extends React.Component {
	componentDidMount() {
		document.title = "Projects";
	}
	render() {
		return (
			<div>
				<TopBar />
				<ul className="project-list">
					<ProjectListItem
						name="CallbackBot (narcov)"
						about="/projects/narcov"
						repo="https://github.com/threedliams/CallbackBot"
					/>

					<ProjectListItem
						name="Particle Filter Localization"
						about="/projects/localization"
						repo="https://github.com/EricFalkenberg/particle_filter_localization"
					/>

					<ProjectListItem
						name="HughBorg"
						about="/projects/hughborg"
						repo="https://github.com/threedliams/HughBorg"
					/>

					<ProjectListItem
						name="This website"
						about="/projects/website"
						repo="https://github.com/threedliams/threedliams.github.io"
					/>

					<ProjectListItem
						name="Crappy Games"
						about="/projects/crappyGames"
						repo="https://github.com/threedliams/CrappyGames"
						play="https://threedliams.github.io/pages/assets/games/CrappyGames/bin/index.html"
					/>

					<ProjectListItem
						name="MonkeyProto"
						about="/projects/monkeyProto"
						repo="https://github.com/threedliams/MonkeyProto"
						play="https://threedliams.github.io/pages/assets/games/MonkeyProto/bin/index.html"
						playComment=" (only works with 2 controllers)"
					/>

					<ProjectListItem
						name="Old Roguelike"
						about="/projects/oldRoguelike"
						repo="https://github.com/threedliams/MutationRoguelike"
					/>
				</ul>
			</div>
		);
	}
};
