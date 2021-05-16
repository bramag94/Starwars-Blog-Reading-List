import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Button } from "bootstrap";

export const Favorites = props => {
	const { store, actions } = useContext(Context);
	const { index } = useParams();
	const Planetas = store.favs;
	const People = store.peoplefavs;
	//console.log("misfavoritos", favoritos);
	const [planetas, setPlanets] = useState([]);

	return (
		<div className="container text-center mt-5 homesize">
			<div className="text-white">
				<h3 className="text-white">MY FAVORITES</h3>
			</div>
			<div>
				<h1 className="text-white">Planets</h1>
				<table className="table table-dark" style={{ backgroundColor: "black" }}>
					<thead>
						<tr>
							<th scope="col">No.</th>
							<th scope="col">Name</th>
							<th scope="col">Rotation Period</th>
							<th scope="col">Orbital Period</th>
							<th scope="col">Diameter</th>
							<th scope="col">Climate</th>
							<th scope="col">Gravity</th>
							<th scope="col">Terrain</th>
							<th scope="col">Surface Water</th>
							<th scope="col">Population</th>
							<th scope="col">Detele</th>
						</tr>
					</thead>
					{store.favs.map((Planets, index) => {
						return (
							<tbody key={Planets.id}>
								<tr>
									<th scope="row">{index}</th>
									<td>{Planets.name}</td>
									<td>{Planets.rotation_period}</td>
									<td>{Planets.orbital_period}</td>
									<td>{Planets.diameter}</td>
									<td>{Planets.climate}</td>
									<td>{Planets.gravity}</td>
									<td>{Planets.terrain}</td>
									<td>{Planets.surface_water}</td>
									<td>{Planets.population}</td>
									<td>
										<button
											type="button"
											className="btn btn-primary"
											onClick={() => {
												setPlanets(planetas.filter((planets, index) => index !== index));
											}}
											key={index}>
											<i className="far fa-trash-alt" />
										</button>
									</td>
								</tr>
							</tbody>
						);
					})}
				</table>
			</div>

			<div>
				<h1 className="text-white">CHARACTERS</h1>
				<table className="table table-dark" style={{ backgroundColor: "black" }}>
					<thead>
						<tr>
							<th scope="col">No.</th>
							<th scope="col">Name</th>
							<th scope="col">Height</th>
							<th scope="col">Mass</th>
							<th scope="col">Hair colo</th>
							<th scope="col">Skin color</th>
							<th scope="col">Eye color</th>
							<th scope="col">Birth year</th>
							<th scope="col">Gender</th>
						</tr>
					</thead>
					{store.peoplefavs.map((People, index) => {
						return (
							<tbody key={People.id}>
								<tr>
									<th scope="row">{index}</th>
									<td>{People.name}</td>
									<td>{People.height}</td>
									<td>{People.mass}</td>
									<td>{People.hair_color}</td>
									<td>{People.skin_color}</td>
									<td>{People.eye_color}</td>
									<td>{People.birth_year}</td>
									<td>{People.gender}</td>
								</tr>
							</tbody>
						);
					})}
				</table>
			</div>

			<div>
				<Link to="/">
					<button className="btn btn-primary">Ir a home</button>
				</Link>
			</div>
			<script
				src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
				integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
				crossOrigin="anonymous"
			/>
			<script
				src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
				integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
				crossOrigin="anonymous"
			/>
			<script
				src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
				integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
				crossOrigin="anonymous"
			/>
		</div>
	);
};
