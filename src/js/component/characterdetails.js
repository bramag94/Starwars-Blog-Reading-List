import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Charactersdetails = props => {
	const { store, actions } = useContext(Context);
	const { id01 } = useParams();
	console.log(id01);

	const [peoples, Peopledetails] = React.useState([]);
	const personaje = store.peoples[id01];
	console.log(personaje);
	//console.log("favorites", store.favs);

	return (
		<div className="container colorbg homesize contcard">
			<div className="mt-3">
				<div className="row">
					<div className="col">
						<img
							src="https://www.rockandpop.cl/wp-content/uploads/2020/11/1d9c8486ccb4519d85cd5ee92ea77ef5.jpg"
							className="card-img-top"
							alt="..."
						/>{" "}
					</div>
					<div className="col">
						<div className="row text-white border border-white">
							<h3 className="align-middle titulo">{personaje.name}</h3>{" "}
						</div>
						<div className="row text-white cuerpo">
							<ul>
								<li>Height: {personaje.height}</li>
								<li>Mass: {personaje.mass}</li>
								<li>Hair color: {personaje.hair_color}</li>
								<li>Skin colorl: {personaje.skin_color}</li>
								<li>Eye color: {personaje.eye_color}</li>
								<li>Birth year: {personaje.birth_year}</li>
								<li>Génder: {personaje.gender}</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row text-white">
					<div className="botonescard">
						<Link to={"/characters"}>
							<button className="btn btn-primary m-2 ">Ir atrás</button>
						</Link>
						<button
							className="btn btn-primary"
							type="submit"
							onClick={() => actions.createfavspeople(personaje)}>
							<i className="far fa-bookmark" /> Agregar a favorito
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
