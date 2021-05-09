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
		<div className="container colorbg homesize contcard">
			<div className="mt-3">
				<div className="row">
					<div className="col">
						<img
							src="https://static2.abc.es/media/201201/19/Star_Wars--644x450.jpg"
							className="card-img-top"
							alt="..."
						/>{" "}
					</div>
					<div className="col">
						<div className="row text-white border border-white">
							<h3 className="align-middle titulo">{selected.name}</h3>{" "}
						</div>
						<div className="row text-white cuerpo">
							<ul>
								<li>Periodo de rotación: {selected.rotation_period}</li>
								<li>Tipo de clima: {selected.climate}</li>
								<li>Terreno: {selected.terrain}</li>
								<li>Superficie de agua: {selected.surface_water}</li>
								<li>Población: {selected.population}</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row text-white">
					<div className="botonescard">
						<Link to={"/planets"}>
							<button className="btn btn-primary m-2 ">Ir atrás</button>
						</Link>
						<button className="btn btn-primary" type="submit" onClick={() => actions.createfavs(selected)}>
							<i className="far fa-bookmark" /> Agregar a favorito
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
