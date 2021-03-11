import React from 'react';
import TopBar from './TopBar';
import ProjectListItem from './ProjectListItem';

export default class Projects extends React.Component {
	componentDidMount() {
		document.title = "Projects";
	}
	render() {
		const posts = [
			{
				name: "CallbackBot (narcov)",
				about: "/projects/callback-bot",
				repo: "https://github.com/threedliams/CallbackBot",
				image: "/pages/assets/project-thumbnails/narcov.png",
			},
			{
				name: "Particle Filter Localization",
				about: "/projects/localization",
				repo: "https://github.com/EricFalkenberg/particle_filter_localization",
				image: "/pages/assets/project-thumbnails/particle-filter.png",
			},
			{
				name: "Chode.js",
				website: "https://www.chodejs.com",
				repo: "https://github.com/threedliams/chode.js",
				image: "/pages/assets/project-thumbnails/chodejs.png",
			},
			{
				name: "HughBorg",
				about: "/projects/hughborg",
				repo: "https://github.com/threedliams/HughBorg",
				image: "/pages/assets/project-thumbnails/hughborg.png",
			},
			{
				name: "This website",
				about: "/projects/website",
				repo: "https://github.com/threedliams/threedliams.github.io",
				image: "/pages/assets/project-thumbnails/this-website.png",
			},
			{
				name: "Crappy Games",
				about: "/projects/crappy-games",
				repo: "https://github.com/threedliams/CrappyGames",
				play: "/pages/assets/games/crappy-games/bin/index.html",
				image: "/pages/assets/project-thumbnails/crappy-games.png",
			},
			{
				name: "MonkeyProto",
				about: "/projects/monkey-proto",
				repo: "https://github.com/threedliams/MonkeyProto",
				play: "/pages/assets/games/monkey-proto/bin/index.html",
				playComment: " (only works with 2 controllers)",
				image: "/pages/assets/project-thumbnails/monkey-proto.png",
			},
			{
				name: "Old Roguelike",
				about: "/projects/oldRoguelike",
				repo: "https://github.com/threedliams/MutationRoguelike",
				image: "/pages/assets/project-thumbnails/old-roguelike.png",
			},
		]

		return (
			<div>
				<TopBar />
				<ul className="project-list">
					{
						posts.map((item) => {
							return <ProjectListItem
								name={item.name}
								about={item.about}
								repo={item.repo}
								play={item.play}
								playComment={item.playComment}
								image={item.image}
								website={item.website}
							/>
						})
					}
				</ul>
			</div>
		);
	}
};
