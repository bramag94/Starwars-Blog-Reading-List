import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Favorites = props => {
	const { store, actions } = useContext(Context);
	const { index } = useParams();
	const favoritos = store.favs;
	console.log("misfavoritos", favoritos);

	return (
		<div className="container text-center mt-5 homesize">
			<div className="text-white">
				<h3 className="text-white">MY FAVORITES</h3>
			</div>
			<div>
				<h1 className="text-white">Planets</h1>
				<ul className="list-group">
					<li className="text-white">{favoritos.name}</li>
				</ul>
			</div>
			<div>
				<h1 className="text-white">Characters</h1>
				<ul className="list-group">
					<li className="text-white"> </li>
				</ul>
			</div>

			<Link to="/">
				<button className="btn btn-primary">Ir a home</button>
			</Link>
		</div>
	);
};
