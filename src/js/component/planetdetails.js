import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planetdetails = props => {
	const { store, actions } = useContext(Context);
	const { id02 } = useParams();
	console.log(id02);

	const [planets, Planetdetails] = React.useState([]);
	const selected = store.planets[id02];
	console.log("favorites", store.favs);

	return (
		<div className="container">
			<div className="card" style={{ width: "18rem" }}>
				<img
					src="https://static2.abc.es/media/201201/19/Star_Wars--644x450.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title"> Nombre: {selected.name} </h5>
					<p className="card-text"> Diámero {selected.diameter}</p>
					<p className="card-text"> Tipo de clima: {selected.climate}</p>{" "}
					<Link to={"/planets"}>
						<button className="btn btn-primary">Ir atrás</button>
					</Link>
					<button className="btn btn-primary" onClick={() => actions.createfavs(selected)}>
						Fav
					</button>
				</div>
			</div>
		</div>
	);
};
