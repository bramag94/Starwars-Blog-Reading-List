import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Myfavorites = () => {
	const { store, actions } = useContext(Context);
	const { favs } = useParams();
	console.log(favs);

	//const [peoples, Peopledetails] = React.useState([]);
	const planetasfavoritos = store.favs;
	console.log(personaje);
	console.log("favorites", store.favs);

	const peoplefavoritos = store.peoplefavs;
	console.log(personaje);
	console.log("peolplefavs", store.peoplefavs);

	return (
		<div className="card" style={{ width: "18rem;" }}>
			<img
				src="https://www.rockandpop.cl/wp-content/uploads/2020/11/1d9c8486ccb4519d85cd5ee92ea77ef5.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body" />
			My Favorites
		</div>
	);
};
