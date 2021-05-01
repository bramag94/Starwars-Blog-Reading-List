import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="container text-center mt-5 colorbg homesize">
		<div>
			<h1 className="text-white">Star Wars</h1>
		</div>
		<span />
		<div className="jumbotron jumbotron-fluid colorbg">
			<div className="container">
				<h1 className="display-4 text-white">Dear visitant, welcome to StarWars Blog.</h1>
				<p className="lead text-white">
					This is a place where you can find information about characters and planest of StarWars. Check this
					out!
				</p>
			</div>
		</div>
		<div className="container d-xl-inline-block p-2 text-white">
			<div className="row text-white">
				<div className="col">
					<div>
						<h1 className="text-white">PLANETS</h1>
						<Link to="/planets">
							<img
								width={300}
								height={200}
								src="https://exoplanets.nasa.gov/internal_resources/116"
								alt="PlanetsSW"
								border-radius="5"
							/>
						</Link>
					</div>
				</div>
				<div className="col">
					<div>
						<h1 className="text-white">CHARACTERS</h1>
						<Link to="/characters">
							<img
								width={300}
								height={200}
								src="https://i.blogs.es/7c15b5/sw/450_1000.jpeg"
								alt="CharactersSW"
								border-radius="5"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
);
