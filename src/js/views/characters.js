import React from "react";
import { Link } from "react-router-dom";

export const Characters = () => (
	<div className="text-center mt-5">
		<h1>Personajes</h1>
		<Link to="/">
			<botton className="btn btn-primary">Ir a home</botton>
		</Link>
	</div>
);
