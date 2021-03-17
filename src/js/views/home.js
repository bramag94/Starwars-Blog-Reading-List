import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Star Wars</h1>
		<Link to="/planets">
			<botton className="btn btn-primary">Ir a Planets</botton>
		</Link>
		<span> </span>
		<Link to="/characters">
			<botton className="btn btn-primary">Ir a Personajes</botton>
		</Link>
	</div>
);
